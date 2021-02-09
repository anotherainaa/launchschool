# add a setter method named #name
# rename kitty to `Luna` and invoke greet again

class Cat
  attr_reader :name
  attr_writer :name

  def initialize(name)
    @name = name
  end

  def greet
    puts "Hello! My name is #{name}!"
  end
end

kitty = Cat.new('Sophie')
kitty.greet
kitty.name = "Luna"
kitty.greet

# here I've added an attr_writer to add a setter method #name
# I can also use attr_accessor which adds a getter and setter method to the class. 
