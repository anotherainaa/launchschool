class Luhn
  attr_accessor :digits

  def initialize(number)
    @digits = number.digits
  end

  def number
    @digits.reverse.join.to_i
  end

  def addends
    result = []
    @digits.each_with_index do |number, index|
      if index.odd?
        number *= 2
        number -= 9 if number >= 10
      end
      result << number
    end
    result.reverse
  end

  def checksum
    addends.sum
  end

  def valid?
    checksum % 10 == 0
  end

  def self.create(number)
    luhn = new(number)
    counter = 0
    while counter < 10
      luhn = new(number)
      luhn.digits.prepend(counter)
      break if luhn.valid?
      counter += 1
    end
    luhn.number
  end
end

=begin

def self.create(number)
  if new(number * 10).valid?
    number * 10
  else
    luhn_remainder = new(number * 10).checksum % 10
    number * 10 + (10 - luhn_remainder)
  end
end

- counting from right most digit
- move left
- double the value of every second digit.

- if digit besome 10 or more,
  - subtract 9.

- 1111 becomes - 2121
- 8763 - becomes 7733 (6 * 2 = 12 - 9  - 3 ) (8 * 2 = 16 - 9 = 7)


- add all digits together - 1111 becomes 2121 - checksum of 6 not valid!
- 8763 -> 7733 - checksum of 20

- if the total ends in 0 - total module 10 == 0, then valid!
- else not valid



=end
