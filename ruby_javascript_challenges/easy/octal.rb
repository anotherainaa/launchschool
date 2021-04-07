class Octal
  def initialize(string)
    @number = string
  end

  def to_decimal
    return 0 unless valid_octal?
    decimal = 0

    @number.split("").reverse.each_with_index do |digit, index|
      digit = digit.to_i
      decimal += digit * (8 ** index)
    end
    decimal
  end

  def valid_octal?
    @number.scan(/[^0-7]/) == []
  end
end

p Octal.new('10').to_decimal


=begin

PEDAC

Input: numbers are string format - octal number
Outpu: actual integer in decimal format.


Understand the problem
  233 # decimal
= 2*10^2 + 3*10^1 + 3*10^0
= 2*100  + 3*10   + 3*1

  233 # octal
= 2*8^2 + 3*8^1 + 3*8^0
= 2*64  + 3*8   + 3*1
= 128   + 24    + 3
= 155

Important - If the numbers include letters, return 0.
Maybe a helper method to check if number is valid?
- if number start with a 0, it's a valid number.
  - how to check?

any number more than > 8 is invalid. - return 0

Basically need to reverse engineer the octal in to a decimal?
Question - how to reverse engineer?

What is the biggest right most value for the digit?


130 -> 88

= 8 * 10^1 + * 8 * 10^0
= 80 + 8
= 88

130
= (1 * (8**2)) + (3 * (8**1)) + (0 *(8 ** 0))
= 64 + 24 + 0
= 88

10
= 1 * (8 ** 1) + 0 * (8 ** 0)
= 8 + 0
= 8

Algorithm

- for each digit,
  - digit * digit ** index
  - sum the numbers
- return sum.

- I need to check if it's a valid octal
  - an octal is invalid if it includes anything besides 0 - 7

=end
