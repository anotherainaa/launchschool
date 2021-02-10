# 1 - add the appropriate access methods to the code

class Person
  attr_accessor :name
  attr_writer :phone_number
end

person1 = Person.new
person1.name = 'Jessica'
person1.phone_number = '0123456789'
puts person1.name

# Here, we are going to get and set the instance variabl `@name` for person1
# For name, we use attr_accessor :name which implements both getter and setter methods for the instance variable @name

# But we only want set the value of instance variables `@phone_number` 
# For phone_number, we can use attr_writer :phone_number which creates only a getter method for instance variables `@phone_number`