module Hand
  def hit(deck)
    @hand << deck.deal
  end

  def stay
    @total
    @current_move = "stay"
  end

  def busted?
    total
    @total > 21
  end

  def total
    sum = @hand.map(&:value).sum

    @hand.select { |card| card.suit == "Ace"}.count.times do
      sum -= 10 if sum > 21
    end

    @total = sum
  end

  def reset
    @hand = []
  end
end

class Player
  include Hand

  attr_accessor :hand, :current_move

  def initialize
    @hand = []
  end
end

class Dealer
  include Hand

  attr_accessor :hand, :current_move

  def initialize
    @hand = []
  end
end

class Deck
  SUITS = ['Hearts', 'Diamond', 'Spades', 'Club']
  VALUES = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"]

  def initialize
    @cards = []
    reset
  end

  def reset
    # create a card object of each card
    SUITS.product(VALUES).shuffle.each do |card|
      @cards << Card.new(card[0], card[1])
    end
  end

  def deal
    reset if @cards.empty?
    @cards.pop
  end
end

class Card
  attr_reader :rank, :suit

  VALUES = {"Jack" => 11,
    "Queen" => 12,
    "King" => 13,
    "Ace" => 11
  }

  def initialize(suit, rank)
    @suit = suit
    @rank = rank
  end

  def value
    VALUES.fetch(rank, rank)
  end

  def to_s
    "#{rank} of #{suit}"
  end
end

class Game
  def initialize
    @player = Player.new
    @dealer = Dealer.new
    @deck = Deck.new
  end

  def start
    display_welcome_message
    deal_cards
    loop do
      show_initial_cards
      player_turn
      dealer_turn
      break if someone_busted? || both_player_stay?
    end
    show_result
    display_goodbye_message
  end

  def show_result
    puts "Player total is #{@player.total}. Dealer total is #{@dealer.total}"

    if @player.busted?
      puts "Player busted!"
    elsif @dealer.busted?
      puts "Dealer busted!"
    elsif @player.total > @dealer.total
      puts "Player wins!"
    elsif @player.total <= @dealer.total
      puts "Dealer wins!"
    else
      puts "It's a tie!"
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

  def both_player_stay?
    @player.current_move && @dealer.current_move == "stay"
  end

  def player_turn
    spacing
    move = player_choose
    if move == 'h'
      @player.hit(@deck)
    elsif move == 's'
      @player.stay
    end
     puts "Your total: #{@player.total}"
     spacing
  end

  def dealer_turn
    if @dealer.total < 17
      @dealer.hit(@deck)
      puts "Dealer hit!"
    else
      @dealer.stay
      puts "Dealer stayed!"
    end
    spacing
    pause
    clear
  end

  def someone_busted?
    @player.busted? || @dealer.busted?
  end

  def player_choose
    player_turn = nil
    loop do
      puts "Would you like to (h)it or (s)tay?"
      player_turn = gets.chomp.downcase
      break if ['h', 's'].include?(player_turn)
      puts "Sorry, must enter 'h' or 's'."
    end
    player_turn
  end

  def deal_cards
    2.times do
      @player.hand << @deck.deal
      @dealer.hand << @deck.deal
    end

    until !@player.busted? && !@dealer.busted?
      @player.reset
      @dealer.reset
      2.times do
        @player.hand << @deck.deal
        @dealer.hand << @deck.deal
      end
    end
  end

  def show_initial_cards
    @player.hand.each do |card|
      puts card
    end
    puts "Your total: #{@player.total}"
    spacing
  end

  def display_welcome_message
    puts "Welcome to Twenty-One!"
    spacing
    pause
    clear
  end

  def display_goodbye_message
    spacing
    puts "Thanks for playing Twenty-One!"
  end
end

Game.new.start
