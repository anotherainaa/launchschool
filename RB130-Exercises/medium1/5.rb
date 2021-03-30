# passing parameteres part 3



items = ['apples', 'corn', 'cabbage', 'wheat']

# def gather(items)
#   puts "Let's start gathering food."
#   yield(items)
#   puts "We've finished gathering!"
# end

# # Number 1
# gather(items) do |*produce, wheat|
#   puts produce.join(', ')
#   puts wheat
# end

# puts

# # Number 2
# gather(items) do |apples, *vegetables, wheat|
#   puts apples
#   puts vegetables.join(", ")
#   puts wheat
# end

# puts

# # Number 3
# gather(items) do |apples, *assorted|
#   puts apples
#   puts assorted.join(", ")
# end

# puts
# # Number 4
# gather(items) do |apples, corn, cabbage, wheat|
#   puts "#{apples}, #{corn}, #{cabbage}, and #{wheat}"
# end

# 1
# def gather(*produce, wheat)
#   puts "Let's start gathering food."
#   p produce
#   puts wheat
#   puts "We've finished gathering!"
# end

# 2
# def gather(apples, *vegetables, wheat)
#   puts "Let's start gathering food."
#   puts apples
#   p vegetables
#   puts wheat
#   puts "We've finished gathering!"
# end

# 3
# def gather(apples, *assorted)
#   puts "Let's start gathering food."
#   puts apples
#   p assorted
#   puts "We've finished gathering!"
# end

# 4
def gather(apples, corn, cabbage, wheat)
  puts "Let's start gathering food."
  puts "#{apples}, #{corn}, #{cabbage}, and #{wheat}"
  puts "We've finished gathering!"
end

# method call

gather(*items)
