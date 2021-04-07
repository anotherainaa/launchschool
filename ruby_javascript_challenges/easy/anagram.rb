class Anagram
  def initialize(word)
    @word = word
  end

  def match(words)
    result = []
    words.each do |word|
      next if word.downcase == @word.downcase
      result << word if @word.downcase.chars.sort == word.downcase.chars.sort
    end
    result
  end
end

# Notes
# Use helper methods
# If I were to use helper methods, what would the breakdown look like?
