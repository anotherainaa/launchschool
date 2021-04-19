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
- x - ex

- honest and herb?


- y - especially if second letter is consonent?



consonent sounds
- b
- m
- l
- w

if the first two letter are consonents, take it behind?
- p
- k

- sc
-thr

- qu
- *qu

- thr
- sch

- ye
- yt
- xe
- xr

most times - until we find the next aeiou?
- qu?


=end
