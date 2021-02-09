# replace the setter and getter method using Ruby's shorthand 
# make it simpler!

class Cat
  attr_accessor :name

  def initialize(name)
    @name = name
  end

  def greet
    puts "Hello! My name is #{name}!"
  end
end

kitty = Cat.new('Sophie')
kitty.greet
kitty.name = 'Luna'
kitty.greet

# This should work exactly the same as the previous code!
# use attr_accessor when you know you want both getter and setter
# use attr_reader and attr_writer when you only want to get or set a value. 