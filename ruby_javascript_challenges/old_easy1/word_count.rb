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
