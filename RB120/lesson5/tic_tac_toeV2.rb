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
  attr_reader :marker, :score

  def initialize(marker)
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
  HUMAN_MARKER = "X"
  COMPUTER_MARKER = "O"
  FIRST_TO_MOVE = HUMAN_MARKER
  WINNING_SCORE = 3

  attr_reader :board, :human, :computer

  def initialize
    @board = Board.new
    @human = Player.new(HUMAN_MARKER)
    @computer = Player.new(COMPUTER_MARKER)
    @current_marker = FIRST_TO_MOVE
  end

  def play
    clear
    display_welcome_message
    main_game
    display_goodbye_message
  end

  private

  # def create_player(human_marker)
  #   @human = Player.new(human_marker)
  #   if human_marker == 'X' ?
  #     @computer = Player.new("O")
  #   else
  #     @computer = Player.new("X")
  #   end
  # end

  # def choose_marker
  #   marker = nil
  #   loop do
  #     puts "Choose your marker: X or O"
  #     marker = gets.chomp
  #     break if %w(X O).include?(marker)
  #   end
  #   create_player(marker)
  # end

  def display_score
    puts "Your score     : #{human.score}"
    puts "Computer score : #{computer.score}"
    puts ""
  end

  def main_game
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
      display_round_result # display_round_result & increment score
      break if someone_won_game? # only break when someone_won_game?
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

  def wait_a_second
    sleep(1)
  end

  def human_turn?
    @current_marker == HUMAN_MARKER
  end

  def current_player_moves
    if human_turn?
      human_moves
      @current_marker = COMPUTER_MARKER
    else
      computer_moves
      @current_marker = HUMAN_MARKER
    end
  end

  def reset_game
    score.reset
    reset
  end

  def reset
    board.reset
    @current_marker = [HUMAN_MARKER, COMPUTER_MARKER].sample
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
    puts "You're a #{human.marker}. Computer is a #{computer.marker}."
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
    wait_a_second
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
