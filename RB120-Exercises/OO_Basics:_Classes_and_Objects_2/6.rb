# use the following code and create a class `Cat` that prints a greeting
# when `#greet` is invoked. 
# the greeting should include the name and color of the cat. 
# use a constant for the color

class Cat
  COLOR = "Rainbow"

  attr_reader :name

  def initialize(name)
    @name = name
  end

  def greet
    puts "Hello! My name is #{name} and I'm a #{COLOR} cat!"
  end
end

kitty = Cat.new('Sophie')
kitty.greet

# I created a `Cat` class that prints a personalized greeting when `#greet` is invoked. 
# The personalized greeting ouputs the `@name` of an instance of Cat invoking the method
# an also outputs it's color which was defined using a constant `COLOR`. 

# We need the `attr_reader` to ensure that the the instance variable `@name` can be 
# retrieved from outside of the class using method `#name`.
