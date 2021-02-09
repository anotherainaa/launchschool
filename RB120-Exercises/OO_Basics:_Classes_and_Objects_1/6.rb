# move the greeting from initialize to an instance method named #greet

class Cat
  def initialize(name)
    @name = name
  end

  def greet
    puts "Hello! My name is #{@name}"
  end
end

kitty = Cat.new("Sophie")
kitty.greet

# note that instance variables can be acccessed anywhere in the object 
# greet is an instance method and can only be invoked when there's 
# an instance of the class. 