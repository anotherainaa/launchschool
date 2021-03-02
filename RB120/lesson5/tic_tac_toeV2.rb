# rubocop:disable Naming/FileName
# rubocop:enable Naming/FileName

class Board
  WINNING_LINES = [[1, 2, 3], [4, 5, 6], [7, 8, 9]] + # rows
                  [[1, 4, 7], [2, 5, 8], [3, 6, 9]] + # cols
                  [[1, 5, 9], [3, 5, 7]]              # diagonals

  def initialize
    @squares = {}
    reset
  end

  def []=(num, marker)
    @squares[num].marker = marker
  end

  def unmarked_keys
    @squares.keys.select do |key|
      @squares[key].unmarked?
    end
  end

  def full?
    unmarked_keys.empty?
  end

  def someone_won?
    !!winning_marker
  end

  def winning_marker
    WINNING_LINES.each do |line|
      squares = @squares.values_at(*line)
      if n_identical_markers?(squares, 3)
        return squares.first.marker
      end
    end
    nil
  end

  def reset
    (1..9).each { |key| @squares[key] = Square.new }
  end

  # rubocop:disable Metrics/AbcSize
  # rubocop:disable Metrics/MethodLength
  def draw
    puts "     |     |"
    puts "  #{@squares[1]}  |  #{@squares[2]}  |  #{@squares[3]}"
    puts "     |     |"
    puts "-----+-----+-----"
    puts "     |     |"
    puts "  #{@squares[4]}  |  #{@squares[5]}  |  #{@squares[6]}"
    puts "     |     |"
    puts "-----+-----+-----"
    puts "     |     |"
    puts "  #{@squares[7]}  |  #{@squares[8]}  |  #{@squares[9]}"
    puts "     |     |"
  end
  # rubocop:enable Metrics/AbcSize
  # rubocop:enable Metrics/MethodLength

  def center_empty?
    @squares[5].unmarked?
  end

  def potential_square(marker_type)
    WINNING_LINES.each do |line|
      squares = @squares.values_at(*line)
      if n_identical_markers?(squares, 2, marker_type)
        return line.select { |k| @squares[k].unmarked? }.first
      end
    end
    nil
  end

  private

  def n_identical_markers?(squares, num, marker_type = nil)
    markers = squares.select(&:marked?).collect(&:marker)
    return false if markers.size != num
    if marker_type
      return false if !markers.all?(marker_type)
    end
    markers.min == markers.max
  end
end

class Square
  INITIAL_MARKER = " "

  attr_accessor :marker

  def initialize(marker=INITIAL_MARKER)
    @marker = marker
  end

  def to_s
    @marker
  end

  def marked?
    marker != INITIAL_MARKER
  end

  def unmarked?
    marker == INITIAL_MARKER
  end
end

module Scoreable
  WINNING_SCORE = 3

  def increment_score
    @score += 1
  end

  def reset_score
    @score = 0
  end

  def show_score
    puts "#{name}'s score is #{score}."
  end

  def won_game?
    score == WINNING_SCORE
  end
end

class Player
  include Scoreable

  @@human_marker = nil
  @@computer_marker = nil

  attr_reader :name, :marker, :score

  def initialize
    @name = set_name
    @marker = set_marker
    @score = 0
  end

  def show_marker
    puts "#{name}'s marker is #{marker}."
  end
end

class Human < Player
  def set_name
    answer = nil
    loop do
      puts "What's your name?"
      answer = gets.chomp.capitalize
      break if answer != ""
      puts "Name cannot be empty."
    end
    answer
  end

  def set_marker
    marker = nil
    loop do
      puts "Choose your marker: #{TTTGame::MARKERS.join(' or ')}"
      marker = gets.chomp.upcase
      break if TTTGame::MARKERS.include?(marker)
      puts "Invalid input. Please choose #{TTTGame::MARKERS.join(' or ')}"
    end
    @@human_marker = marker
  end

  def choose_square(squares)
    square = nil
    loop do
      square = gets.chomp
      break if squares.map(&:to_s).include?(square)
      puts "Sorry, that's not a valid choice."
    end
    square.to_i
  end
end

class Computer < Player
  COMPUTER_NAMES = ["Baymax", "R2D2", "Sam"]

  def set_name
    COMPUTER_NAMES.sample
  end

  def set_marker
    @@computer_marker = TTTGame::MARKERS.select do |marker|
      marker != @@human_marker
    end.first
  end

  def choose_square(board)
    if board.center_empty?
      5
    elsif find_winning_square(board)
      find_winning_square(board)
    elsif find_at_risk_square(board)
      find_at_risk_square(board)
    else
      board.unmarked_keys.sample
    end
  end

  private

  def find_at_risk_square(board)
    board.potential_square(@@human_marker)
  end

  def find_winning_square(board)
    board.potential_square(@@computer_marker)
  end
end

class TTTGame
  attr_reader :board, :human, :computer

  MARKERS = ["X", "O", "Z"]

  def initialize
    @board = Board.new
    @current_marker = randomize_first_to_move
  end

  def play
    clear
    display_welcome_message
    main_game
    display_goodbye_message
  end

  private

  def randomize_first_to_move
    MARKERS.sample
  end

  def create_players
    @human = Human.new
    @computer = Computer.new
    clear
  end

  def display_score
    human.show_score
    computer.show_score
    spacing
  end

  def display_rules
    puts "Game rules:"
    puts "1. First player to win 5 rounds wins the game."
    puts "2. First mover is selected at random."
    spacing
  end

  def main_game
    display_rules
    create_players
    loop do
      play_one_round
      display_game_result
      break unless play_again?
      reset_game
      display_play_again_message
    end
  end

  def play_one_round
    loop do
      display_board
      player_move
      update_score
      display_round_result
      break if someone_won_game?
      reset
    end
  end

  def player_move
    loop do
      current_player_moves
      break if board.someone_won? || board.full?

      clear_screen_and_display_board if human_turn?
    end
  end

  def clear
    system 'clear' || system('cls')
  end

  def pause
    sleep(0.8)
  end

  def spacing
    puts ""
  end

  def human_turn?
    @current_marker == human.marker
  end

  def current_player_moves
    if human_turn?
      human_moves
      @current_marker = computer.marker
    else
      computer_moves
      @current_marker = human.marker
    end
  end

  def reset_game
    human.reset_score
    computer.reset_score
    reset
  end

  def reset
    board.reset
    @current_marker = randomize_first_to_move
    clear
  end

  def display_play_again_message
    puts "Let's play again!"
    spacing
    pause
  end

  def play_again?
    answer = nil
    loop do
      puts "Would you like to play again? (y/n)"
      answer = gets.chomp.downcase
      break if %w(y n).include? answer
      puts "Sorry, must be y or n."
    end

    answer == 'y'
  end

  def display_welcome_message
    puts "Welcome to Tic Tac Toe!"
    spacing
  end

  def display_goodbye_message
    puts "Thanks for playing Tic Tac Toe! Goodbye!"
  end

  def display_marker
    human.show_marker
    computer.show_marker
  end

  def display_board
    display_score
    display_marker
    spacing
    board.draw
    spacing
  end

  def clear_screen_and_display_board
    clear
    display_board
  end

  def human_moves
    puts "Choose a square between (#{board.unmarked_keys.join(', ')}):"
    square = human.choose_square(board.unmarked_keys)
    board[square] = human.marker
  end

  def computer_moves
    square = computer.choose_square(board)
    board[square] = computer.marker
  end

  def update_score
    case board.winning_marker
    when human.marker
      human.increment_score
    when computer.marker
      computer.increment_score
    end
  end

  def display_round_result
    clear_screen_and_display_board
    case board.winning_marker
    when human.marker
      puts "You won this round!"
    when computer.marker
      puts "Computer won this round!"
    else
      puts "It's a tie!"
    end
    pause
  end

  def someone_won_game?
    human.won_game? || computer.won_game?
  end

  def display_game_result
    clear_screen_and_display_board
    if human.won_game?
      puts "You won the game!"
    elsif computer.won_game?
      puts "Computer won the game!"
    end
  end
end

game = TTTGame.new
game.play
