class GuessingGame
  def initialize(min_number, max_number)
    @range = min_number..max_number
    @winning_number = random_number
    @guesses = compute_number_of_guesses(@range)
    @current_guess = nil
  end

  def play
    display_welcome_message
    loop do
      player_make_guess
      check_guess
      @guesses -= 1
      break if player_won? || no_more_guesses?
    end
    display_result
    display_goodbye_message
  end

  private

  def compute_number_of_guesses(range)
    Math.log2(range.size).to_i + 1
  end

  def spacing
    puts
  end

  def display_result
    if player_won?
      puts "You won!"
    else
      puts "You have no more guesses. You lost!"
    end
    spacing
  end

  def player_make_guess
    puts "You have #{@guesses} guesses remaining."
    loop do
      puts "Enter a number between #{@range.first} and #{@range.last}:"
      @current_guess = gets.chomp.to_i
      break if (@range).include?(@current_guess)
      print "Invalid guess. "
    end
  end

  def check_guess
    if @current_guess < @winning_number
      puts "Your guess is too low."
    elsif @current_guess > @winning_number
      puts "Your guess is too high."
    end
  end

  def player_won?
    @current_guess == @winning_number
  end

  def no_more_guesses?
    @guesses.zero?
  end

  def display_welcome_message
    puts "Welcome to the Guessing Game!"
    spacing
  end

  def display_goodbye_message
    puts "Thanks for playing!"
  end

  def random_number
    rand(@range)
  end
end

game = GuessingGame.new(1, 1000)
game.play
