class RomanNumeral
  ROMAN = {
    1 => 'I',
    5 => 'V',
    10 => 'X',
    50 => 'L',
    100 => 'C',
    500 => 'D',
    1000 => 'M'
  }

  def initialize(number)
    @number = number
  end

  def to_roman
    accumulated_roman = ''

    @number.digits.each_with_index do |digit, index|
      next if digit.zero?

      place_value = 10 ** index
      smallest_value = ROMAN.fetch(place_value)
      temp_roman = ''

      case digit
      when 1..3
        digit.times { |roman| temp_roman << smallest_value }
      when 6..8
        temp_roman << ROMAN.fetch(5 * place_value)
        (digit - 5).times { |roman| temp_roman << smallest_value }
      when 4
        temp_roman << smallest_value
        temp_roman << ROMAN.fetch(5 * place_value)
      when 9
        temp_roman << smallest_value
        temp_roman << ROMAN.fetch(10 * place_value)
      else
        temp_roman << ROMAN.fetch(digit * place_value)
      end
      accumulated_roman.prepend(temp_roman)
    end
    accumulated_roman
  end
end


  # def to_roman
  #   result = ''
  #   @number.digits.each_with_index do |digit, index|
  #     next if digit == 0
  #     actual = digit.to_i * (10 ** index)
  #     temp_roman = ROMAN.fetch(actual)
  #     result.prepend(temp_roman)
  #   end
  #   result
  # end
# one = RomanNumeral.new(123)
# p one.to_roman

# if number is between 1 - 3
  # then add I until it equals number
# if number is 4
  # then add I and V
# if number is 5
  # then V
# if number is 6 - 8
  # then V + I until equals number
# if number is 9
  # then I and X
# if number is 10
  # then X

=begin
Problem
- Converting numbers to roman numberals

Input: number
Output: string, roman numerals

Edge cases? = Up to 3000 should be enough

I - 1
II - 2
III - 3
IV - 4
V - 5
VI - 6
VII - 7
VIII - 8
IX - 9
X - 10
L - 50
C - 100
D - 500
M - 1000

1, 10, 100, 1000 = I, X, C, M
5, 50, 500, 5000 = V, L, D, ?


80 = LXXX
90 = XC

900 = CM

repeating pattern
1 - 3 = pattern
4 = 5 - 1
5 = 5
6 - 8 = pattern
9 = 10 - 1
10 = 10

Data structure
Hash?

Algorithm
- If number is 1 get I
- if number is 10 get X
- if number is 9 get 1 and 10


"1000"
I = skip I
10 = skip X
100 = skip C
1000 = it should be M
- divmod?

"2"

2 = II
20 = XX (10 x 2)
200 = CC
2000 = MM

4

4 = IX
40 = XL
400 = CD
4000 = MMMM

1999
MCMXCIX

until remain = 0

  div, remain = 1999.divmod((1 * 10 ** 3))
  [1, 999]
  div = 1 * 10 ** 3 = 1000 = M

  div, remain = remain.divmod((1 * 10 ** 2))
  [9, 99]
  div = 9 * 10 ** 2 = 900 = 1000 - 100 = CM

  div, remain = remain.divmod((1 * 10 ** 1))
  [9, 9]
  div = 9 * 10 ** 1 = 90 = 100 - 10 = XC

  div, remain = remain.divmod((1 * 10 ** 0))
  [9, 0]
  div = 9 * 10 ** 1 = 0 = 10 - 1 = IX

end


1 - 10
1 => I
5 => V
10 => X

if number is 2
  2 = 1 + 1
  3 = 1 + 1 + 1
  4 = 1 followed by 5



=end
