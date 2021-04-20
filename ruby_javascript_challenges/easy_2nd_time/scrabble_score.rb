class Scrabble
  LETTER_SCORES = {
    %w(A E I O U L N R S T) => 1,
    %w(D G)  => 2,
    %w(B C M P) => 3,
    %w(F H V W Y) => 4,
    "K" => 5,
    %w(J X) => 8,
    %w(Q Z) => 10
  }

  def initialize(word)
    @word = word
  end

  def score
    return 0 unless valid_word?
    @word.chars.inject(0) do |sum, char|
      sum += letter_score(char)
    end
  end

  def letter_score(character)
    LETTER_SCORES.each do |letters, score|
      return score if letters.include?(character.upcase)
    end
  end

  def valid_word?
    !@word.nil? && @word.match?(/[A-Za-z]+/)
  end

  def self.score(word)
    Scrabble.new(word).score
  end
end

# Notes - cleaning up letters so that we only have letters instead of
# invalid word

# PEDAC
# How do you store the score - constant
# Check that the scrabble input is valid

# score method
# get the score for each letter
# sum the score return the score
