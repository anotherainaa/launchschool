# Input : Array of numbers - with a starting number and ending number and gap numbers in between
# output: Array of numbers - an array containing only the missing numbers

# Algo
# . Get the first number
# . Get the last number
# . For each missing number in between, put into new arry
# . Return new array

def missing(numbers)
  first = numbers.first
  last = numbers.last
  result = []

  (first..last).to_a.each do |number|
    if !numbers.include?(number)
      result << number
    end
  end

  result
end

# LS Answer
# . Trying using #each_cons
# . This makes use of the fact that when a range is in descending order
  # . it returns an empty array
# . concat only adds items that are not in the calling array from the given arg


def missing(array)
  result = []
  array.each_cons(2) do |first, second|
    result.concat(((first + 1)..(second - 1)).to_a)
  end
  result
end

p missing([-3, -2, 1, 5]) == [-1, 0, 2, 3, 4]
p missing([1, 2, 3, 4]) == []
p missing([1, 5]) == [2, 3, 4]
p missing([6]) == []

# Further exploration

# - Can you find a way to solve the problem without using method that
# . doesn't take blocks?
# - Just use my solution using a loop or while loop.


