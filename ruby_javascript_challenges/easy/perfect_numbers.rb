class PerfectNumber
  def self.classify(number)
    raise StandardError if number < 1

    sum = sum_divisors(number)
    if sum == number
      'perfect'
    elsif sum > number
      'abundant'
    elsif sum < number
      'deficient'
    end
  end

  class << self
    private

    def sum_divisors(number)
      sum = 0
      (1...number).each do |num|
        sum += num if number % num == 0
      end
      sum
    end
  end
end


=begin
Input: Number
Output: 'deficient', 'perfect', 'abundant' depending on whather the

What is a perfect number, divisors and sum = number
Deficient, divisor sum are less than number
Abundaben, divisor sum are more than number

The question?
- How do you find all the divorors of a number?
  - I suppose the easiest would be to to go through all the numbers and then
  see if diving number with current number would equal to 0

- The bigger question which logic to put where>

Algorithm
- Find the sum of all the divisors of a number
  - for number from 1 up to number
    - for each number check if it is divisible by number
    - if yes, sum it up
  - return sum

- is sum is
  - equal, return 'perfect'
  - more than number, return 'abudnant'
  - less than number, return 'deficient'

# Notes
- private only works on instance methods?

=end
