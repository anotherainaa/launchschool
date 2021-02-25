class Deck
  RANKS = ((2..10).to_a + %w(Jack Queen King Ace)).freeze
  SUITS = %w(Hearts Clubs Diamonds Spades).freeze

  def initialize
    create_deck
  end

  def draw
    create_deck if @deck.empty?
    @deck.pop
  end

  private

  def create_deck
    shuffle_cards
    @deck = []
    SUITS.each do |suit|
      @shuffled.each do |rank|
        @deck << Card.new(rank, suit)
      end
    end
  end

  def shuffle_cards
    @shuffled = []
    cards = RANKS.dup
    until cards.empty?
      random = rand(0...cards.length)
      @shuffled << cards.delete_at(random)
    end
  end
end

class Card
  include Comparable
  attr_reader :rank, :suit

  VALUES = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"]

  def initialize(rank, suit)
    @rank = rank
    @suit = suit
  end

  def <=>(other)
    value <=> other.value
  end

  def value
    VALUES.index(rank)
  end

  def to_s
    "#{rank} of #{suit}"
  end
end

deck = Deck.new
drawn = []

52.times { drawn << deck.draw }
p drawn.count { |card| card.rank == 5 } == 4
p drawn.count { |card| card.suit == 'Hearts' } == 13

drawn2 = []
52.times { drawn2 << deck.draw }
p drawn2.count { |card| card.rank == 5 } == 4
p drawn2.count { |card| card.suit == 'Hearts' } == 13
p drawn != drawn2 # Almost always.
