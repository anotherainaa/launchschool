# Create an object-oriented number guessing class for
# [x] numbers in the range 1 to 100,
# [x] with a limit of 7 guesses per game.

class Player
  attr_reader :guess_remaining, :guess

  def initialize
    @guess_remaining = 7
    @win = false
  end

  def choose
    answer = ''
    loop do
      print  "Enter a number between 1 and #{GuessingGame::MAX_NUMBER}: "
      answer = gets.chomp.to_i
      if (1..GuessingGame::MAX_NUMBER).to_a.include?(answer)
        break
      else
        puts "Invalid number. Choose between 1 to #{GuessingGame::MAX_NUMBER}."
        puts
      end
    end
    self.guess = answer
  end

  def won
    self.win = true
  end

  def decrement_guess
    self.guess_remaining -= 1
  end

  def won?
    win
  end

  private

  attr_accessor :win
  attr_writer :guess, :guess_remaining
end

class GuessingGame
  MAX_NUMBER = 100

  attr_reader :player, :winning_number

  def initialize
    @player = Player.new
    @winning_number = rand(1..MAX_NUMBER)
  end

  def play
    loop do
      display_remaning_guess
      player.choose
      check_guess
      player.decrement_guess
      break if no_more_guesses? || player.won?
    end
    display_winner
  end

  def no_more_guesses?
    player.guess_remaining == 0
  end

  def display_remaning_guess
    puts
    puts "You have #{player.guess_remaining} guesses remaining."
  end

  def check_guess
    if player.guess == winning_number
      puts "That's the number!"
      player.won
    elsif player.guess < winning_number
      puts "Your guess is too low."
    else
      puts "Your guess is too high."
    end
  end

  def display_winner
    puts
    if player.won?
      puts "You won!"
    else
      puts "You have no more guesses. You lost!"
    end
  end
end


game = GuessingGame.new
game.play
