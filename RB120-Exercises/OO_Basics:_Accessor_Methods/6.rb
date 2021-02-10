# add the appropriate accessor method so that name is capitalized upon assigment 

class Person
  attr_reader :name

  def name=(n)
    @name = n.capitalize
  end
end

person1 = Person.new
person1.name = 'eLiZaBeTh'
puts person1.name

# In order to fulfill this requirement, we write a custom setter method `#name=`
# This method takes an argument `n` which represent a name input
# and assigns or re-assigns the value of instance variable `@name` to invoking `#capitalize` on `n`

# Notes
#   we are forced to create our implementation of `name=` because we want to format the string while assigning it to the instance variable `@name`