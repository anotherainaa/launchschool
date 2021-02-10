# 1 - add the appropriate accessor methods to this code

class Person
  attr_accessor :name
end

person1 = Person.new
person1.name = 'Jessica'
puts person1.name

# The code on line 8 is trying to set the value of instance variable @name to Jessica
# While the code on line 9 is trying to call get the name of instance variables person1 
# the best way to make this code work is to use Ruby's shorthand attr_accessor :name which will create
# a getter and setter method. 

# On line 9 we invoke a method named `name=`. It looks that way due to Ruby's syntactical sugar. 
# `person1.name=("Jessica") what it looks like without Ruby's syntactical sugar`
