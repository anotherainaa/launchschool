# Internal vs External Iterators

# Demo of Enummerator

# class FakeEnum

# end

# def factorial(n)
#   return 1 if n.zero?
#   1.upto(n).inject do |sum, num|
#     sum * num
#   end
# end


# Hint - you'll only need 3 enum methods
# You might need enumerable.


# p factorial(0)
# p factorial(1)
# p factorial(2)
# p factorial(3)
# p factorial(4)
# p factorial(5)

# 0 1 By definition, 0! is 1
# 1 1 By definition, 1! is 1
# 2 2 2! = 2 * 1
# 3 6 3! = 3 * 2 * 1
# 4 24  4! = 4 * 3 * 2 * 1
# 5 120 5! = 5 * 4 * 3 * 2 * 1

factorial = Enumerator.new { |yielder|
  accumulator = 1
  number = 0
  loop do
    accumulator = number.zero? ? 1 : accumulator * number
    yielder << accumulator
    number += 1
  end
}

# External iterator




# Internal iterator
factorial.each do |num|
  factorial
end
