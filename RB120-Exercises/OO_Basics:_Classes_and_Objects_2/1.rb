# modify the following code so that "Hello! I'm a cat!" is printeed when 
# `Cat.generic_greeting` is invoked. 

class Cat
  def self.generic_greeting
    puts "Hello I'm a cat!"
  end
end

kitty = Cat.new
kitty.class.generic_greeting?

# Here, I defined a class method `#generic_greeting` which 
# outputs "Hello I'm a cat!" when invoked by the `Cat` class. 

# we can also define the method as `Cat.generic_greeting`
# but `self` is preferred.

# If we invoke a class method on an instance
# we will get a no method error. 

# Further exploration 
#   It returns underfined method because we don't have generic_greeting?
#   method for the cat class 
#   calling `#class` on instance `kitty` returns the class of the object which is
#   Cat and the class then `generic_greeting?` is then invoked on `Cat`. 
#   We can fix this by calling a method that exists `generic_greeting`