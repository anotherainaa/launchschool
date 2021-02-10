# modify the code so that @age is multiplied by 2 upon assignmen
# then multiple the @age by 2 again when @age is returned by the getter method

class Person
  def age=(age)
    @age = age * 2
  end

  def age
    @age * 2
  end
end

person1 = Person.new
person1.age = 20
puts person1.age

# We implement the getter and method manually to fulfil the requirement.
# in the setter method, we modify the value age as we set @age 

# in the getter method, we only return the value of age multiplied by 2. 
# theoretically @age should stil be 40. 

# Notes 
#   you can also implement a private method `#double` and making the getter method invoke the `#double` method
#   we can restrict access to `#double` outside of the method and we can use `#double` to double any value within the class.