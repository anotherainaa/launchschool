# Internal vs External Iterators

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

factorial = Enumerator.new do |yielder|
  accumulator = 1
  number = 0
  loop do
    accumulator = number.zero? ? 1 : accumulator * number
    yielder << accumulator
    number += 1
  end
end

# external iterators

# 6.times { |number| puts "#{number}! == #{factorial.next}" }
# puts "=========================="
# 6.times { |number| puts "#{number}! == #{factorial.next}" }
# puts "=========================="
# factorial.rewind
# 6.times { |number| puts "#{number}! == #{factorial.next}" }
# puts "=========================="

# When we don't rewind, the enumerator just keeps going from the last
# place we stopped from the first time around?

#internal iterators

# factorial.each_with_index do |value, number|
#   puts "#{number}! == #{value}"
#   break if number >= 5
# end

# Here we have to break out of the loop because the original enumerator
# doesn't have a breaking point.

# Enumerators are the reason we can chain .map.with_index ?

# .map - when called without a block returns an enumerator.
# with the enumerator we can do stuff with it like check what is next
# in the array.

# we can chain methods
# we can use internal iterators or external iterators

# if we pass a block into it, we're just using it like we normally do it seems.

# Enumerate means to mention a number one by one.
# To specify one after the other.

# In the factorial, we have a loop that should go on and on
# because there is no breaking condition.
# But with the enumerator we allow ourselves the ability to go over it
# one at a time as however we want to.


forever = Enumerator.new do |yielder|
  number = 0
  loop do
    yielder << number
    number += 1
  end
end

result = forever.map do |value|
  break if value >= 10
  p value + 1
end
p result

# why is result nil?



