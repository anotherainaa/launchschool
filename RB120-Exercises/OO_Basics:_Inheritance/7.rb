# determine the lookup parth when invoking cat1.color
# only list the classes that were checked by Ruby shwn searching the #color method

class Animal
  attr_reader :color

  def initialize(color)
    @color = color
  end
end

class Cat < Animal
end

class Bird < Animal
end

cat1 = Cat.new('Black')
p cat1.color

# The lookup path => [Cat, Animal] It will stop at Animal because it stops looking as soon
# as it finds the method. The method #color is a getter method and defined in the class Animal through
# the keyword `attr_reader` followed by symbol `:color` which is Ruby's shorthand for creating a getter method. 

# Note that when a method is invoked, it search the method's class fo the specified method.
# it no method is found, Ruby inspecsts the class's superclass
# Important: the process is repeated until the method is found or there are no more classes. 

# use `#ancestors` (#ancestors is part of module? not a class method? )