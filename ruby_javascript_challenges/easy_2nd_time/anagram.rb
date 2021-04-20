class Anagram
  def initialize(word)
    @word = word
  end

  def match(words)
    words.select do |word|
      word.downcase != @word.downcase &&
        word.downcase.chars.sort == @word.downcase.chars.sort
    end
  end
end

=begin

PEDAC

- create a class Anagram
- constructor methods takes a word
- match method check if instance of anagram matches the given array or words.
  - return an array of matching words

constructor method
- takes a word

match method take an array of words
- select the words where the sorted wrods are same with anagram sorted
- except
  - identical words should be rejected
  - not case sensitive
- returns an array

=end
