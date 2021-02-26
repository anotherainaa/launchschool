class PokerHand
  def initialize(deck)
    @hand = deck
  end

  def print
    @hand.each do |card|
      puts card
    end
  end

  def evaluate
    case
    when royal_flush?     then 'Royal flush'
    when straight_flush?  then 'Straight flush'
    when four_of_a_kind?  then 'Four of a kind'
    when full_house?      then 'Full house'
    when flush?           then 'Flush'
    when straight?        then 'Straight'
    when three_of_a_kind? then 'Three of a kind'
    when two_pair?        then 'Two pair'
    when pair?            then 'Pair'
    else                       'High card'
    end
  end

  private

  def royal_flush?
  end

  def straight_flush?
  end

  def four_of_a_kind?
    @hand.any? do |card|
      @hand.map(&:rank).count(card.rank) == 4
    end
  end

  def full_house?
  end

  def flush?
    suit = @hand[0].suit
    @hand.all? do |card|
      card.suit == suit
    end
  end

  def straight?
    ranks = @hand.map {|card| card.value[0]}
    ranks.uniq.size == 5 && ranks.sum % 5 == 0
  end

  def three_of_a_kind?
    @hand.any? do |card|
      @hand.map(&:rank).count(card.rank) == 3
    end
  end

  def two_pair?
    @hand.count do |card|
      @hand.map(&:rank).count(card.rank) == 2
    end == 4
  end

  def pair?
    @hand.any? do |card|
      @hand.map(&:rank).count(card.rank) == 2
    end
  end
end

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
    @deck = []
    SUITS.each do |suit|
      RANKS.each do |rank|
        @deck << Card.new(rank, suit)
      end
    end
    shuffle_cards
  end

  def shuffle_cards
    cards = @deck.dup
    @deck = []
    until cards.empty?
      random = rand(0...cards.length)
      @deck << cards.delete_at(random)
    end
  end
end

class Card
  # include Comparable
  attr_reader :rank, :suit

  SUITS = ['Diamonds', 'Clubs', 'Hearts', 'Spades']
  VALUES = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"]

  def initialize(rank, suit)
    @rank = rank
    @suit = suit
  end

  def <=>(other)
    value <=> other.value
  end

  def value
    [VALUES.index(rank), SUITS.index(suit)]
  end

  def to_s
    "#{rank} of #{suit}"
  end
end


# hand = PokerHand.new(Deck.new)
# hand.print
# puts hand.evaluate

hand = PokerHand.new([
  Card.new(10,      'Hearts'),
  Card.new('Ace',   'Hearts'),
  Card.new('Queen', 'Hearts'),
  Card.new('King',  'Hearts'),
  Card.new('Jack',  'Hearts')
])
puts hand.evaluate == 'Royal flush'

hand = PokerHand.new([
  Card.new(8,       'Clubs'),
  Card.new(9,       'Clubs'),
  Card.new('Queen', 'Clubs'),
  Card.new(10,      'Clubs'),
  Card.new('Jack',  'Clubs')
])
puts hand.evaluate == 'Straight flush'

hand = PokerHand.new([
  Card.new(3, 'Hearts'),
  Card.new(3, 'Clubs'),
  Card.new(5, 'Diamonds'),
  Card.new(3, 'Spades'),
  Card.new(3, 'Diamonds')
])
puts hand.evaluate == 'Four of a kind'

hand = PokerHand.new([
  Card.new(3, 'Hearts'),
  Card.new(3, 'Clubs'),
  Card.new(5, 'Diamonds'),
  Card.new(3, 'Spades'),
  Card.new(5, 'Hearts')
])
puts hand.evaluate == 'Full house'

hand = PokerHand.new([
  Card.new(10, 'Hearts'),
  Card.new('Ace', 'Hearts'),
  Card.new(2, 'Hearts'),
  Card.new('King', 'Hearts'),
  Card.new(3, 'Hearts')
])
puts hand.evaluate == 'Flush'

hand = PokerHand.new([
  Card.new(8,      'Clubs'),
  Card.new(9,      'Diamonds'),
  Card.new(10,     'Clubs'),
  Card.new(7,      'Hearts'),
  Card.new('Jack', 'Clubs')
])
puts hand.evaluate == 'Straight'

hand = PokerHand.new([
  Card.new('Queen', 'Clubs'),
  Card.new('King',  'Diamonds'),
  Card.new(10,      'Clubs'),
  Card.new('Ace',   'Hearts'),
  Card.new('Jack',  'Clubs')
])
puts hand.evaluate == 'Straight'

hand = PokerHand.new([
  Card.new(3, 'Hearts'),
  Card.new(3, 'Clubs'),
  Card.new(5, 'Diamonds'),
  Card.new(3, 'Spades'),
  Card.new(6, 'Diamonds')
])
puts hand.evaluate == 'Three of a kind'

hand = PokerHand.new([
  Card.new(9, 'Hearts'),
  Card.new(9, 'Clubs'),
  Card.new(5, 'Diamonds'),
  Card.new(8, 'Spades'),
  Card.new(5, 'Hearts')
])
puts hand.evaluate == 'Two pair'

hand = PokerHand.new([
  Card.new(2, 'Hearts'),
  Card.new(9, 'Clubs'),
  Card.new(5, 'Diamonds'),
  Card.new(9, 'Spades'),
  Card.new(3, 'Diamonds')
])
puts hand.evaluate == 'Pair'

hand = PokerHand.new([
  Card.new(2,      'Hearts'),
  Card.new('King', 'Clubs'),
  Card.new(5,      'Diamonds'),
  Card.new(9,      'Spades'),
  Card.new(3,      'Diamonds')
])
puts hand.evaluate == 'High card'
