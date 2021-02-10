# update the code so that it prints `"I'm Sophie!"` when it invokes puts `kitty`

class Cat
  attr_reader :name

  def initialize(name)
    @name = name
  end

  def to_s
    "I'm #{name}!"
  end
end

kitty = Cat.new('Sophie')
puts kitty


# Here, we are overriding the to_s method which comes from the superclass Object. 
# We define the string representation of kitty to be "I'm #{name}!"
# This will output "I'm #{name}!" accordingly when an instance of a Cat class is invoked with `puts`