# add a method named `#identify` that returns its calling object

class Cat
  attr_accessor :name

  def initialize(name)
    @name = name
  end

  def identify
    self
  end
end

kitty = Cat.new('Sophie')
p kitty.identify
p kitty 

# My answer
#   I've added a method `#identify` which returns the calling object
#   in this case, self is referring to the instance object assigned to kitty

# Line 16 and 17 are basically doing the same thing.
# we invoke `p` to print the object so that `#inspect` is called and lets us
# view the instance variables and their values along with the object.