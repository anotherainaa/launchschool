# use the code from previous exercise and add a parameter to initalize 
# that provides a name for the cat. You can remove the puts from before. 

class Cat
  def initialize(name)
    @name = name
    puts "Hello! My name is #{@name}"
  end
end

kitty = Cat.new("Sophie")

# Now we have an instance of the Cat class which is assigned to variable kitty
# where it's name is Sophie and outputs "Hello! My name is Sophie!"
