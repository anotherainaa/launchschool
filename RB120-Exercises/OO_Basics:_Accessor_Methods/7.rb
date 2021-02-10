# add the appropriate accessor methods so that #@name is returned with the added prefix  `Mr.`

class Person
  attr_writer :name

  def name
    "Mr. " + @name 
  end
end

person1 = Person.new
person1.name = 'James'
puts person1.name

# This case is the flip side of the previous question.
# We allo the instance variable `@name` to be changed from outside the class
# by implementing attr_writer on `@name`

# But we want to add the prefix `Mr. ` when retrieving `@name`
# to do this, we write out own getter method `@name` which fulfils this criteria
# by appending `Mr.`  to instance variable `@name`

# Notes
#     If we prefixed @name upon assignment, the value would be modified
#     which may noe be what we want. 

#     we can't use the built in accessor methods because we want extra functionality
