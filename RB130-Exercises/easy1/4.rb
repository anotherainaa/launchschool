
# Input: number > 0.
# output: a list of all divisors of the divisors

# Compute all the numbers that can perfectly divide the number?

# starting from 1 up to the given number,
# for all numbers,
  # if the given number is divisible by the current number
  # put it into a new array
# return the new array

# def divisors(integer)
#   result = []
#   (1..integer).to_a.each do |num|
#     if integer % num == 0
#       result << num
#     end
#   end
#   result
# end

# Further exploration
# Half of the divisors gives you the other half.

def divisors(number)
  result = []

  (1..Math.sqrt(number)).each do |element|
    if number % element == 0
      result << element
      result << number / element
    end
  end
  result.sort.uniq
end


p divisors(1) == [1]
p divisors(7) == [1, 7]
p divisors(12) == [1, 2, 3, 4, 6, 12]
p divisors(98) == [1, 2, 7, 14, 49, 98]
p divisors(99400891) == [1, 9967, 9973, 99400891]

# LS answer
# . uses method #upto and #select
# same variation of the above.


