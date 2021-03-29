def drop_while(collection)
  false_index = 0
  collection.each_with_index do |item, index|
    if !yield(item)
      break
    end
    false_index += 1
  end
  collection[false_index..-1]
end

# def drop_while(array)
#   index = 0
#   while index < array.size && yield(array[index])
#     index += 1
#   end
#   array[index..-1]
# end

p drop_while([1, 3, 5, 6]) { |value| value.odd? } == [6]
p drop_while([1, 3, 5, 6]) { |value| value.even? } == [1, 3, 5, 6]
p drop_while([1, 3, 5, 6]) { |value| true } == []
p drop_while([1, 3, 5, 6]) { |value| false } == [1, 3, 5, 6]
p drop_while([1, 3, 5, 6]) { |value| value < 5 } == [5, 6]
p drop_while([]) { |value| true } == []
