class Scrabble
  POINTS = {
    %w(A E I O U L N R S T) => 1,
    %w(D G)  => 2,
    %w(B C M P) => 3,
    %w(F H V W Y) => 4,
    'K' => 5,
    %w(J X) => 8,
    %w(Q Z) => 10,
  }

  def initialize(word)
    @word = word
  end

  def score
    score = 0
    return score if @word.nil?

    @word.upcase.chars do |char|
      POINTS.each do |letters, point|
        score += point if letters.include?(char)
      end
    end
    score
  end

  def self.score(word)
    Scrabble.new(word).score
  end
end

=begin

PEDAC

Problem
- Compute the scrabble score
- Refer to table for the scores

Example
- Refer to test cases

Data structure
- Hashes for letter to score

Question:
Does it matter if I concatenate the letters in to a string
and just see if the string includes the letter in the key?
and grab the value at that hash?
The key can be one letter or an array.
If it was a string, there is no need to handle them differently?
If it was a an array or string, it is necessary to handle them differently>


Approaches?
- Save the score table with concatenated upcased letter strings as keys and
  respoective score accordingly

- Save the score table with array of letters as keys and respectice scores accordingly


The score method
- for each letter, check if the key includes the letter upcase
  - if yes, grab the value or the score
- sum all of the scores to get the final score.
- return the final score.

Notes

# Since include works the same with both arrays and strings, it is not necessary
# to treat them differently.


=end
