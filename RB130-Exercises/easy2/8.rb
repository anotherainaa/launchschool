# if item is bigger than the last one, overwrite it

def max_by(collection)
  return nil if collection.empty?
  max = collection.first
  temp = yield(max)

  collection[1..-1].each do |item|
    if yield(item) > temp
      max = item
      temp = yield(item)
    end
  end
  max
end

p max_by([1, 5, 3]) { |value| value + 2 } == 5
p max_by([1, 5, 3]) { |value| 9 - value } == 1
p max_by([1, 5, 3]) { |value| (96 - value).chr } == 1
p max_by([[1, 2], [3, 4, 5], [6]]) { |value| value.size } == [3, 4, 5]
p max_by([-7]) { |value| value * 3 } == -7
p max_by([]) { |value| value + 5 } == nil
