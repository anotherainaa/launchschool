# the last_name getter shouldn't be visible outside the class
# first_name getter should be visible outside the class

class Person
  attr_writer :last_name
  attr_accessor :first_name

  def first_equals_last?
    first_name == last_name
  end

  private

  attr_reader :last_name
end

person1 = Person.new
person1.first_name = 'Dave'
person1.last_name = 'Smith'
puts person1.first_equals_last?

# In order to fulfill the criteria, 
# we can expose the setter method to the outside class using attr_writer for `@last_name`
# However, we don't want the getter method to be visible outside of the class.
# But on line 9, the method body invokes the method `#last_name` 
# in order to make this possible and fulfilling the criteria, we can make the getter method private
# which allows it to be invoked inside the class but not outside of the class. 

# LS explanation
#   when handling data in a class, sometimes certain data needs to be kept private
#   only the object knows what the data is. 

# invoking `person1.last_name` will get a `NoMethodError` because `last_name` is a private method