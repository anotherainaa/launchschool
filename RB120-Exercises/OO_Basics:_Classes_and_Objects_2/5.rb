
# create a class named `Cat` that tracks the number of times a new `Cat` object is instantiated

class Cat
  @@count = 0

  def initialize
    @@count += 1
  end

  def self.total
    puts @@count
  end
end

kitty1 = Cat.new
kitty2 = Cat.new

Cat.total

# Here, I created a class named `Cat`.
# I use a class variable `@@count` to help track the number of times new `Cat` object instantiated
# I increase `@@count` by 1 in the initialize method. 
# The count will increase by 1 each time an object is instantiated. 
# In order to check the current count, I defined a method total which outputs the `@@count`