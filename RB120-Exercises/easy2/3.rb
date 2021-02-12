class House
  include Comparable

  attr_reader :price

  def initialize(price)
    @price = price
  end

  def <=>(other)
    price <=> other.price
  end
end

home1 = House.new(100_000)
home2 = House.new(150_000)
puts home1 < home2
puts home1 > home2
puts "Home 1 is cheaper" if home1 < home2
puts "Home 2 is more expensive" if home2 > home1

# Further exploration
#   Is there a natural way to compare houses?
#   What about the age of the house? 
#   what if we're working on a real estate web app, being able to compare the prices is a common
#   which would justify being able to compare houses based on the price.

# Comparable would also allow us to use #sort.

# Are there are class where it would make sense to compare using comparable?
# Depends on problem domain. 
# - Animals? Compare age? 
# - Cars? Age?
# - Sizes of shoes. - ware house that sorts shoes based on shoe_size