class SumOfMultiples
  def initialize(*numbers)
    @numbers = numbers
  end

  def self.to(number)
    multiples = SumOfMultiples.new(3, 5)
    multiples.to(number)
  end

  def to(end_num)
    result = []

    @numbers.each do |multiplier|
      (1...end_num).each do |num|
        result << num if num % multiplier == 0 && !result.include?(num)
      end
    end
    result.sum
  end
end

p SumOfMultiples.to(4)

=begin

PEDAC

Input: number? numbers?
Output: sum of those numbers???

if a number is not provided,
  use default set of 3 and 5.


10
= 3 + 5 + 6 + 9
= 23

7, 13, 17 to 20
- 7: 7, 14 - 1 upto 19, what is divisible by this number which is equal to 0
- 13: 13 - 1 upto 19, what is divisible by this number which is equal to 0
- 17: 17 - 1 upto 19, what is divisible by this number which is equal to 0

- if numbers are given, use those numbers as multiples?
- if not given use 3 and 5.

What's the problem?
- There is a to instance method
- There is a to class method

- One of them should call the other?  Which one?
- We can create an instance with 3 to 5 as default value
  - I guess the class would not have the default value.


=end
