# modify the code to accept a string containing a first and last name
# the name should be split into two instance variables in the setter method
# then joined in the getter method to form a full name

class Person
  def name
    "#{@first_name} #{@last_name}"
  end

  def name=(full_name)
    @first_name, @last_name = names.split
  end
end

person1 = Person.new
person1.name = 'John Doe'
puts person1.name

# Notes
#  Sometimes, when you first create the class, no extra functionality is needed, hence it's good to use Ruby's shorthand
#  later on, the method needs to do something extra, we can manually write both the setter and getter method to incorporate the requested functionality
