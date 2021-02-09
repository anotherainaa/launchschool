# add a getter method names #name and invoke it in place of @name in #greet

class Cat
  attr_reader :name

  def initialize(name)
    @name = name
  end

  def greet
    puts "Hello! My name is #{name}!"
  end
end

kitty = Cat.new("Sophie")
kitty.greet

# Here' I'm using Ruby shorthand attr_reader
# but you can also write it the long way of defining a method called name 
# and returning the instance variable @name

# Note that the attr_reader is preferable because of its simplicity