# rubocop:disable Naming/FileName
# rubocop:enable Naming/FileName

class Move
  VALUES = ['rock', 'paper', 'scissors', 'lizard', 'spock']

  attr_accessor :value
  attr_reader :name, :beats, :loses_to

  def initialize(value)
    @value = convert(value)
  end

  def convert(value)
    case value
    when 'rock' then Rock.new
    when 'paper' then Paper.new
    when 'scissors' then Scissors.new
    when 'lizard' then Lizard.new
    when 'spock' then Spock.new
    end
  end

  def >(other_move)
    value.beats.include?(other_move.value.name)
  end

  def <(other_move)
    value.loses_to.include?(other_move.value.name)
  end

  def to_s
    @value.name
  end
end

class Rock < Move
  def initialize
    @name = 'rock'
    @beats = ['scissors', 'lizard']
    @loses_to = ['paper', 'spock']
  end
end

class Paper < Move
  def initialize
    @name = 'paper'
    @beats = ['rock', 'spock']
    @loses_to = ['scissors', 'lizard']
  end
end

class Scissors < Move
  def initialize
    @name = 'scissors'
    @beats = ['paper', 'lizard']
    @loses_to = ['rock', 'spock']
  end
end

class Lizard < Move
  def initialize
    @name = 'lizard'
    @beats = ['paper', 'spock']
    @loses_to = ['scissors', 'rock']
  end
end

class Spock < Move
  def initialize
    @name = 'spock'
    @beats = ['rock', 'scissors']
    @loses_to = ['paper', 'lizard']
  end
end

class Player
  attr_accessor :move, :name, :score, :history

  def initialize
    set_name
    @score = 0
    @history = []
  end

  def add_score
    @score += 1
  end

  def add_history
    @history << move
  end

  def reset_score
    @score = 0
  end

  def reset_history
    @history = []
  end
end

class Human < Player
  def set_name
    n = ""
    loop do
      puts "What's your name?"
      n = gets.chomp
      break unless n.empty?
      puts "Sorry, must enter a value."
    end
    self.name = n
  end

  def choose
    choice = nil
    loop do
      moves = Move::VALUES
      puts "Please choose #{moves[0..-2].join(', ')} or #{moves[-1]}:"
      choice = gets.chomp
      break if moves.include?(choice.downcase)
      puts "Sorry, invalid choice."
    end
    self.move = Move.new(choice)
  end
end

class Computer < Player
  attr_accessor :won_last_round

  def initialize
    super
    @won_last_round = false
  end

  def set_name
    self.name = ['Hal', 'Sonny'].sample
  end

  def choose
    self.move = Move.new(Move::VALUES.sample)
  end

  def won
    @won_last_round = true
  end

  def lost
    @won_last_round = false
  end
end

class Baymax < Computer
  def set_name
    @name = 'Baymax'
  end

  def choose
    self.move = Move.new(Move::VALUES[1])
  end
end

class R2D2 < Computer
  def set_name
    @name = 'R2D2'
  end

  def choose
    if history.empty?
      super
    else
      self.move = Move.new(predict_winning_move(history.last))
    end
  end

  private

  def predict_winning_move(previous_move)
    if won_last_round
      previous_move.value.loses_to.sample
    else
      previous_move.value.beats.sample
    end
  end
end

class RPSGame
  attr_reader :human, :computer

  WINNING_SCORE = 3

  def initialize
    @human = Human.new
  end

  def play
    display_welcome_message
    loop do
      set_game
      until someone_won?
        play_current_round
      end
      display_game_winner
      break unless play_again?
    end
    display_goodbye_message
  end

  private

  def set_game
    randomize_opponent
    display_players
    reset_score
    reset_history
  end

  def display_players
    puts "#{human.name} is playing against #{computer.name}!"
  end

  def randomize_opponent
    @computer = [Computer, Baymax, R2D2].sample.new
  end

  def display_move_choices
    Move::VALUES.join(', ')
  end

  def display_welcome_message
    puts "Welcome to #{display_move_choices}!"
    puts "First player to #{WINNING_SCORE} points wins the game!"
    sleep(2)
    system('clear') || system('cls')
  end

  def display_goodbye_message
    puts "Thanks for playing #{display_move_choices}. Good bye!"
  end

  def display_moves
    puts "#{human.name} choose #{human.move}."
    puts "#{computer.name} choose #{computer.move}."
  end

  def display_round_winner
    if human.move > computer.move
      puts "#{human.name} won this round!"
    elsif human.move < computer.move
      puts "#{computer.name} won this round!"
    else
      puts "It's a tie!"
    end
  end

  def play_again?
    answer = nil
    loop do
      puts "Would you like to play again? (y/n)"
      answer = gets.chomp
      break if ['y', 'n'].include? answer.downcase
      puts "Sorry, must be y or n."
    end
    return false if answer.downcase == 'n'
    return true if answer.downcase == 'y'
  end

  def someone_won?
    human.score == WINNING_SCORE || computer.score == WINNING_SCORE
  end

  def display_game_winner
    if human.score > computer.score
      puts "#{human.name} won the game!"
    elsif human.score < computer.score
      puts "#{computer.name} won the game!"
    end
  end

  def update_score
    if human.move > computer.move
      human.add_score
      computer.won
    elsif human.move < computer.move
      computer.add_score
      computer.lost
    end
  end

  def display_current_score
    puts "#{human.name}'s score: #{human.score}"
    puts "#{computer.name}'s score: #{computer.score}"
  end

  def play_current_round
    human.choose
    computer.choose
    display_moves
    display_round_winner
    sleep(2)
    system('clear') || system('cls')
    update_score
    display_current_score
    update_history
    display_history
  end

  def reset_score
    human.reset_score
    computer.reset_score
  end

  def reset_history
    human.reset_history
    computer.reset_history
  end

  def display_history
    puts "#{human.name}'s moves:"
    human.history.each_with_index do |move, index|
      puts "#{index + 1} - #{move}"
    end
    puts "#{computer.name}'s moves:"
    computer.history.each_with_index do |move, index|
      puts "#{index + 1} - #{move}"
    end
  end

  def update_history
    human.add_history
    computer.add_history
  end
end

RPSGame.new.play
