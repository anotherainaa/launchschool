class Diamond
  ALPHABETS = ("A".."Z").to_a

  def self.make_diamond(letter)
    @diamond_width = max_width(letter)
    @letters = ("A"..letter).to_a

    diamond = ""
    @diamond_width.times do |index|
      if index == 0 || index == @diamond_width - 1
        diamond << make_first_last_row(0)
      else
        index = invert_index(index) if index > half_width
        diamond << make_other_row(index)
      end
    end
    diamond
  end

  def self.max_width(letter)
    alphabet_position = ALPHABETS.find_index(letter) + 1
    (alphabet_position * 2) - 1
  end

  def self.half_width
    @diamond_width / 2
  end

  def self.invert_index(index)
    @diamond_width - (index + 1)
  end

  def self.make_first_last_row(index)
    outer_spaces = " " * (half_width - index)
    "#{outer_spaces}#{@letters[index]}#{outer_spaces}\n"
  end

  def self.make_other_row(index)
    outer_spaces = " " * (half_width - index)
    middle_spaces = " " * (@diamond_width - (outer_spaces.length * 2) - 2)
    "#{outer_spaces}#{@letters[index]}#{middle_spaces}"\
    "#{@letters[index]}#{outer_spaces}\n"
  end
end

Diamond.make_diamond('D')

=begin

   A
  B B
 C   C
D     D
 C   C
  B B
   A

0   A
1  B B
2 C   C
3D     D
4 C   C
5  B B
7   A

0  A
1 B B
2C   C
3 B
4  A

   A
  B  B
 C C
D     D
 C C
  B  B
   A

class method make_diamond
- take a alphabetical letter
- create a diamond based on the given letter

is it possible to do a d diamond shape?

0   A
1  B B = 7 - 1 - 1 =
2 C   C
3D     D
6   A
- the diamond
4 C   C
5  B B
     A
    B
   C
  D
 E
F
 E
  D
   C
    B
     A

- so the diamond gets bigger, the bigger the letter is.
- except for a
  - any character can pretty much make a diamond.
- from b onwards, the given letter is always in the middle.
  - the size is always an odd number with the letter in the middle.
position 2 * 2 - 1 = 3 diamond size
1 * 2 = 1 - 1 diamond size - a only
3 * 2 - 1 = 5 diamond size
4 * 2 - 1 = 7 diamond size
5 * 2 - 1 = 9 diamond size
6 * 2 - 1 = 11 diamond size
7 * 2 - 1 = 13

- making the first half of the diamond
- reverse it and make the other half of the diamond

- get all the letters from a to the given letter
- determine the size of the diamond

do half of diamond size
- first letter placement is
  - number of spaces = diamond size - 1, then character
- second letter is
  - number of spaces
- number of space = diamon size - 2, then character
- keep going until current letter
- nospace at current letter

- then invert the above process
- get a diamond.


=end
