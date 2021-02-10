# 1 - add an instance method name `compare_secret` 
# 2 - the method should compare the value of @secret from person1 and the value of @secret from person2

class Person
  attr_writer :secret

  def compare_secret(other_person)
    self.secret == other_person.secret
  end

  protected

  attr_reader :secret
end

person1 = Person.new
person1.secret = 'Shh.. this is a secret!'

person2 = Person.new
person2.secret = 'Shh.. this is a different secret!'

puts person1.compare_secret(person2)

# We added a compare secret method which compares the value of secret of the instance calling the method `Person1`
# with `person2` by passing it into `compare_secret` as an argument 
# On line 8 = we compare whether the value of secret from person1 and person2 are of equal value. 
# This evaluates to false because we are comparing two different strings with different values
# which returns the boolean false.

# Note that we can call `self.secret` because protected methods allows it.
# (The difference between private and protected methods.)
# However, Ruby 2.7 seems to allow calling self with private methods? 

# Protected methods allow access between class instances 
# If a method is protected, it can't be invoked from outside of the class
# This allows for controlled access, but wider access between class instances. 



