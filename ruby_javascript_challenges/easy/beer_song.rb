class BeerSong
  def self.verse(start_num, end_num = nil)
    current_num = start_num
    end_num = end_num.nil? ? start_num - 1 : end_num -1

    verse = ''
    loop do
      verse += first_line_of_verse(current_num)
      current_num -= 1
      verse += second_line_of_verse(current_num)

      break if current_num == end_num

      verse += "\n"
    end
    verse
  end

  def self.verses(start_num, end_num)
    self.verse(start_num, end_num)
  end

  def self.lyrics
    self.verse(99, 0)
  end

  def self.first_line_of_verse(current_num)
    bottles = current_num == 1 ? "bottle" : "bottles"
    bottle_quant = current_num == 0 ? "no more" : "#{current_num}"
    "#{bottle_quant.capitalize} #{bottles} of beer on the wall, #{bottle_quant} #{bottles} of beer.\n"
  end

  def self.second_line_of_verse(current_num)
    bottles = current_num == 1 ? "bottle" : "bottles"
    bottle_quant = current_num == 0 ? "no more" : current_num
    quantity = current_num == 0 ? "it" : "one"

    if current_num == -1
      "Go to the store and buy some more, 99 bottles of beer on the wall.\n"
    else
      "Take #{quantity} down and pass it around, #{bottle_quant} #{bottles} of beer on the wall.\n"
    end
  end
end

puts BeerSong.verse(99)
# puts BeerSong.lyrics

=begin

Input: Number to indicate the number of beers in the song into a class method.
Output: A string with the whole verse of the song outputting the numbers correctly

What does a verse look like:
99 => 98
{number} bottles of beer on the wall, {number} bottles of beer.
Take one down and pass it around, {number -= 1} bottles of beer on the wall.

98 => 97
{number} bottles of beer on the wall, {number} bottles of beer.
Take one down and pass it around, {number -= 1} bottles of beer on the wall.

1 => 0 (Represented as no more instead of a number)

1 bottle of beer on the wall, 1 bottle of beer.
Take it down and pass it around, no more bottles of beer on the wall.
Notice the `one` changes into `it` here.

0 => go back to 99
No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.
The last line changes to a new lyrics here.

So the first line is always the same.
{number} bottles of beer on the wall, {numbers} bottles of beer.

Variation in the second verse:
a) Take one down and pass it around, {number -= 1} bottles of beer on the wall.
b) Take it down and pass it around, no more bottles of beer on the wall.

a and b are mostly similar except the one changes to `it`.
At 0, there are the lyrics are affected in this way
- One => it
- {number} => no more

c) Go to the store and buy some more, 99 bottles of beer on the wall.


Other
- Not necessary to have a constructor method?
- class method takes a number
- helper methods?
- New lines?

Algorithm
- First we accept a number which represent number of beers
- Until number is equal to 1
    - we play the same verses
  - when number is 1 to 0
    - modify the verse
  - when number is 0 to number
    - modify the verse
- finish

The quantifier also changes form `bottles` to `bottle` when the number changes
from 2 to 1.

How to play the whole song?
- BeerSong.lyrics

How to play only one song?
- BeerSong.verse(number)



=end
