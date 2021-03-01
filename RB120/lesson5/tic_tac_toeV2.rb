require 'pry'

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

  def at_risk_square
    WINNING_LINES.each do |line|
      squares = @squares.values_at(*line)
      if n_identical_markers?(squares, 2)
        return @squares.select do |k, v| line.include?(k) && v.unmarked?
          end.keys.first
      end
    end
    nil
  end

  private

  def n_identical_markers?(squares, num)
    markers = squares.select(&:marked?).collect(&:marker)
    return false if markers.size != num
    markers.uniq.size == 1
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

class Player
  attr_reader :name, :marker, :score

  def initialize(name, marker)
    @name = name
    @marker = marker
    @score = 0
  end

  def increment_score
    @score += 1
  end

  def reset_score
    @score = 0
  end
end

class TTTGame
  MARKERS = ["X", "O"]
  COMPUTER_NAMES = ["Baymax", "R2D2", "Sam"]
  FIRST_TO_MOVE = MARKERS.sample
  WINNING_SCORE = 3

  attr_reader :board, :human, :computer

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

  def create_players
    human_name = set_name
    human_marker = choose_marker
    @human = Player.new(human_name, human_marker)
    computer_marker = MARKERS.select { |marker| marker != human_marker }.first
    computer_name = COMPUTER_NAMES.sample
    @computer = Player.new(computer_name, computer_marker)
    clear
  end

  def choose_marker
    marker = nil
    loop do
      puts "Choose your marker: #{MARKERS.join(" or ")}"
      marker = gets.chomp.upcase
      break if MARKERS.include?(marker)
      puts "Invalid input. Please choose #{MARKERS.join(" or ")}"
    end
    marker
  end

  def display_score
    puts "#{human.name}'s score is #{human.score}."
    puts "#{computer.name}'s score is #{computer.score}."
    puts ""
  end

  def main_game
    create_players
    clear
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
    system 'clear'
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
    puts ''
  end

  def play_again?
    answer = nil
    loop do
      puts "Would you like to play again? (y/n)"
      answer = gets.chomp.downcase
      break if %w(y n).include? answer
      puts "Sorry, must be y or n"
    end

    answer == 'y'
  end

  def display_welcome_message
    puts "Welcome to Tic Tac Toe!"
    puts ""
  end

  def display_goodbye_message
    puts "Thanks for playing Tic Tac Toe! Goodbye!"
  end

  def display_board
    display_score
    puts "#{human.name}'s marker is #{human.marker}."
    puts "#{computer.name}'s marker is #{computer.marker}."
    puts ""
    board.draw
    puts ""
  end

  def clear_screen_and_display_board
    clear
    display_board
  end

  def human_moves
    puts "Choose a square between (#{board.unmarked_keys.join(', ')}):"
    square = nil
    loop do
      square = gets.chomp.to_i
      break if board.unmarked_keys.include?(square)
      puts "Sorry, that's not a valid choice."
    end
    board[square] = human.marker
  end

  def computer_moves
    # play offense and defense
    if board.center_empty?
      board[5] = computer.marker
    elsif board.at_risk_square
      board[board.at_risk_square] = computer.marker
    else
      board[board.unmarked_keys.sample] = computer.marker
    end
  end

  def display_round_result
    clear_screen_and_display_board
    case board.winning_marker
    when human.marker
      puts "You won this round!"
      human.increment_score
    when computer.marker
      puts "Computer won this round!"
      computer.increment_score
    else
      puts "It's a tie!"
    end
    sleep(1)
  end

  def someone_won_game?
    human.score == WINNING_SCORE || computer.score == WINNING_SCORE
  end

  def display_game_result
    clear_screen_and_display_board
    if human.score == WINNING_SCORE
      puts "You won the game!"
    elsif computer.score == WINNING_SCORE
      puts "Computer won the game!"
    end
  end
end

game = TTTGame.new
game.play
