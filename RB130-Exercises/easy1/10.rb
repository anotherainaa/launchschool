# def count(collection)
#   count = 0
#   collection.each do |item|
#     count += 1 if yield(item)
#   end
#   count
# end

# Further exploration
# Do not use each, loop, while, until

# def count(collection)
#   count = 0
#   for i in (0...collection.size) do
#     count += 1 if yield(collection[i])
#   end
#   count
# end

# def count(collection)
#   collection.select do |item|
#     yield(item)
#   end.size
# end

def count(collection)
  collection.reduce(0) do |count, item|
    count + (yield(item) ? 1 : 0)
  end
end

p count([1,2,3,4,5]) { |value| value.odd? } == 3
p count([1,2,3,4,5]) { |value| value % 3 == 1 } == 2
p count([1,2,3,4,5]) { |value| true } == 5
p count([1,2,3,4,5]) { |value| false } == 0
p count([]) { |value| value.even? } == 0
p count(%w(Four score and seven)) { |value| value.size == 5 } == 2
