# add a module walkable
# in it, add a method #walk that prints "Let's go for a walk!"
# include walkable in `Cat` and invoke #walk on kitty

module Walkable
  def walk
    puts "Let's go for a walk!"
  end
end

class Cat
  include Walkable

  attr_reader :name

  def initialize(name)
    @name = name
  end

  def greet
    puts "Hello! My name is #{name}!"
  end
end

kitty = Cat.new('Sophie')
kitty.greet
kitty.walk

# Here, I've created a `Walkable` module with a method called `#walk`
# which outputs "Let's go for a walk!"
# By mixing in the module in the `Cat` class, 
# we are allowing the class to invoke the methods contained in Walkable 
# we can now invoke kitty.walk 

# A module helps extend the functionality of a class. 
# A module contain methods that may be useful for multiple classes. 