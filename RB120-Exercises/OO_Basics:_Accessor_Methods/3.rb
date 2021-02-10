# Modify the code so that phone number can be read but not changed. 

class Person
  attr_reader :phone_number

  def initialize(number)
    @phone_number = number
  end
end

person1 = Person.new(1234567899)
puts person1.phone_number

person1.phone_number = 9987654321
puts person1.phone_number

# In the beginning we have attr_accessor for instance variable `@phone_number`
# This creates both a setter and getter method which allows the instance variables `@phone_number`
# to be retrieved and change from outside of the class. 

# However, the criteria of this problem is to make the `@phone_number` onoly retrievable from outside of the class. 
# To do this, we change the attr_accessor method to `attr_reader` which fulfils this criteria. 
# Note that this will cause code on line 12 to throw a an error (NoMethodError.)

