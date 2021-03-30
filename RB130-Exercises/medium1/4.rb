birds = %w(raven finch hawk eagle)
# p birds # => ['raven','finch','hawk','eagle']


# raven, finch, hawk, eagle = %w(raven finch hawk eagle)
# p raven # => 'raven'
# p finch # => 'finch'
# p hawk # => 'hawk'
# p eagle # => 'eagle'

# raven, finch, *raptors = %w(raven finch hawk eagle)
# p raven # => 'raven'
# p finch # => 'finch'
# p raptors  # => ['hawk','eagle']

# Write a method that takes an array argument
# . the method should yield the contents of the array to a block
# . which should assign your block variables in such a way that it ignores
# . the two first two elements, and groups all remaining elements as a raptors
# . array

def types(birds)
  yield(birds)
end

raptors = nil

types(birds) do |_, _, *raptors|
  # raptors = *raptors
  puts "Raptors: #{raptors.join(", ")}"
end

