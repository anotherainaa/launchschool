# code is flawed, it allows @name to be modified from outside the method via a destructive method call.
# Fix the code so that it returns a copy of `@name` instaed of a reference to it. 

class Person
  def initialize(name)
    @name = name
  end

  def name
    @name.clone
  end
end

person1 = Person.new('James')
person1.name.reverse!
puts person1.name

# In the beginning `@name` was modified through the invocation of a destructive method.
# getter method typically return a reference to the instance variable. 
# if you use this reference to call a destructive method, it mutates the instance variable! 

# To prevent this, we manually implement a getter method which returns a clone of instance variable `@name`


