# Add two methods `::generic_greeting` and `#personal_greeting`
# the first should print a greeting generic to the class
# the second should be an instance method and print a greeting that's 
# custom to the object

class Cat
  attr_reader :name

  def initialize(name)
    @name = name
  end

  def self.generic_greeting
    puts "Hello, I'm a cat!"
  end

  def personal_greeting
    puts "Hello, my name is #{name}!"
  end
end

kitty = Cat.new('Sophie')

Cat.generic_greeting
kitty.personal_greeting

# My answer
#   I defined two methods. The first is a class method that outputs "Hello, I'm a cat!"
#    when invoked on a class
#   The second is an instance method that outputs "Hello, my name is #{name}"
#    when invoked on an instance of the Cat class. 