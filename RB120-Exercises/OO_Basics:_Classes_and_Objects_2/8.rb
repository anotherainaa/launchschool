# create a class named Person with an instance variable named @secret
# Use a setter method to add a value to @secret
# use a getter method to print @secret

class Person
  attr_accessor :secret
end

person1 = Person.new
person1.secret = 'Shh.. this is a secret!'
puts person1.secret

# First we try the manual way of creating getter and setter methods and confirm that it works. 
# Next, we use Ruby's shorthand way `attr_accessor` which creates a getter and setter method. 
# Note that this way is preferrable due to it's simplicity.