class Phrase
  def initialize(phrase)
    @words = phrase.downcase.scan(/\b[\w']+\b/)
  end

  def word_count
    count = Hash.new(0)
    @words.each do |word|
      count[word] += 1
    end
    count
  end
end

phrase = Phrase.new("First: don't laugh. Then: don't cry.")
p phrase.word_count

phrase2 = Phrase.new("Joe can't tell between 'large' and large.")
p phrase2.word_count
