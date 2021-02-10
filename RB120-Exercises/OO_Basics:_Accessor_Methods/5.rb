# add the appopriate accessor methods
# @age should only be visible to instances of person.

class Person
  attr_writer :age

  def older_than?(other)
    age > other.age
  end

  protected
  
  attr_reader :age
end

person1 = Person.new
person1.age = 17

person2 = Person.new
person2.age = 26

puts person1.older_than?(person2)

# In this case, we use the protected access control which allows
# getter method #age to be called within the class but not outside of the class. 
# We can't use private getter method for @age here because this will not allow `other.age`
# on line 8 to call the #age method. 

# Notes
#   When a amethod is protected, only instances of the class or a subclass can call the method.
#   This means we can easily share sensitive data between instances of the same class type.
#   Calling `person1.age` or `person2.age` will raise a `NoMethodError` (age called on protected method. )