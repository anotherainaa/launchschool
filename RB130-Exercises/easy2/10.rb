# if 1, iterate like element amount of times
# if 2, iterate 2 collection size - 1 amount of times
# if 3, iterate 3 collection size - 2 amount of times
# if 4, iterate 4 collection size - 3 amount of times
# if 5, iterate 0 times

# stop iterating if the number of range is bigger than the remaining elements.
# def each_cons(array, n)
#   array.each_index do |index|
#     range = array[index, n]
#     break if range.size < n

#     first = range.first
#     *rest = range[1..-1]
#     yield(first, *rest)
#   end
#   nil
# end

def each_cons(array, n)
  array.each_index do |index|
    break if index + n - 1 >= array.size
    yield(*array[index..(index + n - 1)])
  end
  nil
end

hash = {}
each_cons([1, 3, 6, 10], 1) do |value|
  hash[value] = true
end
p hash == { 1 => true, 3 => true, 6 => true, 10 => true }

hash = {}
each_cons([1, 3, 6, 10], 2) do |value1, value2|
  hash[value1] = value2
end
p hash == { 1 => 3, 3 => 6, 6 => 10 }

hash = {}
each_cons([1, 3, 6, 10], 3) do |value1, *values|
  hash[value1] = values
end
p hash == { 1 => [3, 6], 3 => [6, 10] }

hash = {}
each_cons([1, 3, 6, 10], 4) do |value1, *values|
  hash[value1] = values
end
p hash == { 1 => [3, 6, 10] }

hash = {}
each_cons([1, 3, 6, 10], 5) do |value1, *values|
  hash[value1] = values
end
p hash == {}
