# rubocop:disable Naming/FileName
# rubocop:enable Naming/FileName

class Move
  VALUES = ['rock', 'paper', 'scissors', 'lizard', 'spock']

  # attr_accessor :value
  attr_reader :name, :beats, :loses_to, :owner, :value

  def initialize(value, player_name)
    @value = convert(value)
    @owner = player_name
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
    value.name
  end
end

class History
  def initialize
    @logs = []
  end

  def all
    logs
  end

  def add(move)
    @logs << move
  end

  def moves_by(player)
    logs.select do |move|
      move.owner == player.name
    end
  end

  private

  attr_reader :logs
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
  attr_reader :score, :name, :move
  attr_accessor :history

  def initialize
    set_name
  end

  def set_score
    self.score = 0
  end

  def add_score
    self.score += 1
  end

  def add_history(move)
    history.add(move)
  end

  def moves
    history.moves_by(self)
  end

  private

  attr_writer :name, :move, :score
end

class Human < Player
  def choose
    choice = nil
    loop do
      moves = Move::VALUES
      puts "Please choose #{moves[0..-2].join(', ')} or #{moves[-1]}:"
      choice = gets.chomp
      break if moves.include?(choice.downcase)
      puts "Sorry, invalid choice."
    end
    self.move = Move.new(choice, name)
  end

  private

  def set_name
    n = ""
    loop do
      puts "What's your name?"
      n = gets.chomp
      break unless n.empty?
      puts "Sorry, must enter a value."
    end
    self.name = n.capitalize
  end
end

class Computer < Player
  def choose
    self.move = Move.new(Move::VALUES.sample, name)
  end

  def won
    self.won_last_round = true
  end

  def lost
    self.won_last_round = false
  end

  private

  attr_accessor :won_last_round

  def set_name
    self.name = ['Hal', 'Sonny'].sample
  end

  def check_opponent_moves
    history.all - history.moves_by(self)
  end
end

class Baymax < Computer
  def choose
    choose_always_rock
  end

  private

  def set_name
    @name = 'Baymax'
  end

  def choose_always_rock
    self.move = Move.new(Move::VALUES[1], name)
  end
end

class R2D2 < Computer
  def choose
    if won_last_round
      opponent_last_move = check_opponent_moves[-2]
      choose_offense_to(opponent_last_move)
    elsif won_last_round == false
      opponent_last_move = check_opponent_moves[-2]
      choose_defense_to(opponent_last_move)
    else
      super
    end
  end

  private

  def set_name
    @name = 'R2D2'
  end

  def choose_offense_to(previous_move)
    moves = previous_move.value.loses_to
    self.move = Move.new(moves.sample, name)
  end

  def choose_defense_to(previous_move)
    moves = previous_move.value.beats
    self.move = Move.new(moves.sample, name)
  end
end

class Cheater < Computer
  def choose
    opponent_current_move = check_opponent_moves.last
    choose_always_win(opponent_current_move)
  end

  private

  def set_name
    @name = Cheater
  end

  def choose_always_win(opponent_move)
    moves = opponent_move.value.loses_to
    self.move = Move.new(moves.sample, name)
  end
end

class RPSGame
  attr_reader :human, :computer, :history

  WINNING_SCORE = 3

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
    @human = Human.new
    @computer = [Computer, Baymax, R2D2, Cheater].sample.new
    display_players
    set_score
    set_history
  end

  def display_players
    puts "#{human.name} is playing against #{computer.name}!"
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
    update_history(human)
    computer.choose
    update_history(computer)
    display_moves
    display_round_winner
    sleep(2)
    system('clear') || system('cls')
    update_score
    display_current_score
    display_history
  end

  def set_score
    human.set_score
    computer.set_score
  end

  def set_history
    @history = History.new
    human.history = history
    computer.history = history
  end

  def display_history
    puts "#{human.name} moves:"
    human.moves.each_with_index do |move, index|
      puts "#{index + 1} - #{move}"
    end

    puts "#{computer.name} moves:"
    computer.moves.each_with_index do |move, index|
      puts "#{index + 1} - #{move}"
    end
  end

  def update_history(player)
    player.add_history(player.move)
  end
end

RPSGame.new.play
