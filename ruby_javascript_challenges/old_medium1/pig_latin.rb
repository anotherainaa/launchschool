class PigLatin
  def self.translate(phrase)
    phrase.split.map do |word|
      translate_word(word)
    end.join(' ')
  end

  def self.translate_word(word)
    new_word = ''
    if start_with_vowel_sound?(word)
       new_word = word + 'ay'
    else
      consonants = get_consonants(word)[1]
      rest_of_word = get_consonants(word)[2]
      new_word = rest_of_word + consonants + 'ay'
    end
    new_word
  end

  def self.start_with_vowel_sound?(word)
    word.match(/\A([aeiou]|[xy][^aeiou])/)
  end

  def self.get_consonants(word)
    word.match(/\A([^aeiou]*qu|[^aeiou]+)([aeiou].*)\z/)
  end
end

=begin

- if word startes with a vowel sound aeiou
  - add ay to the end of the word
- if word begines with consonent sound move the consonent to the end and
  - add ay sound to the end of the word.


vowel sounds
- aeuiou
- x - when paired with a non vowel
- y when paired with a non vowel

consonent sounds
- qu - edge cases
- pretty much any combination which then follows a vowel.

dialect
- herb and honest? - skip for now?
- every other h sound is not a vowel sound?
  - hope
  - hello
  - hi
  - hunter
  - half

Algorithm

main method
- split the phrases into words
- for each word,
  - traslate word into pig latin
- join the phrase with a space

translate word into pig latin
- if the word starts with a vowel sound?
  - combine word + ay
- else (the word starts with a consonant)
  - get the consonents and rest of word
  - combine word + consonant + ay
- return the new word.

start with a vowel sound?
- match words that start with aeiou or xy followed by aeiou

get consonants?
- match words that start with qu follower by vowel OR any consonent combination
  followed by consonent.

=end
