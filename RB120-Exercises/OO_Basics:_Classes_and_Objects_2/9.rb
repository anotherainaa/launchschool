# 1 - add a method named `share_secret` that print the value of @secret when invoked


class Person
  attr_writer :secret

  def share_secret
    puts secret
  end

  private

  attr_reader :secret
end

person1 = Person.new
person1.secret = 'Shh.. this is a secret!'
person1.share_secret

# First, we create share_secret and define the method body with `self.secret`
# This should raise an error because secret is a private method and cannot be accessed with `self`

# Next, we fix the method body of share_secret and outputs the result of calling the method `secret` directly without `self`

# Make methods private when it's not necessary for the methods to be accessed outside of the class. 
# This means they can only be invoked from within the class. 


