# What does the code output? 
# Fix this class so that there are no surprises waiting in store

class Pet
  attr_reader :name

  def initialize(name)
    @name = name.to_s
  end

  def to_s
    "My name is #{@name.upcase}."
  end
end

# name = 'Fluffy'
# fluffy = Pet.new(name)
# puts fluffy.name
# puts fluffy
# puts fluffy.name
# puts name

# Further exploration 

name = 42 # => name variables is assigned an integer value 42
fluffy = Pet.new(name)
# we instantiate an instance of Pet class and pass it into it `name` as an argument
# At this point, name is pointing to integer object 42 
# in the method initialize we assign the value of instance variable `@name` to the value of invoking `name.to_s`
# variable name is current pointing towards integer 42. Method #to_s is invoked on Integer 42.
# Note that calling method #to_s on integer object returns the string version of the integer. This return "42". 
# @name is assigned to "42"
# fluffy is then assigned the instance of Pet class that was just instantiated above. 

name += 1 #=> Here, we go back to local variable name from line 25 which is still pointing to Integert 42 and increment it's value by 1.
# Integers are immutable objects hence, name is now re-assigned to value of 43. 
puts fluffy.name
# Here we invoke puts on fluffy.name. Invoking the #name method on `fluffy` (instance of Pet class), 
# returns the value assigned to the instance variable `@name` which is "42".
# Invoking puts on this return value of "42" outputs "42". 

puts fluffy
# Here we are invoking puts on `fluffy` which is the equivalent to this `puts fluffy.to_s`
# Note that we have overridden `to_s` for class Pet to return "My name is #{@name.upcase}."
# This ouputs "My name is 42." (Calling .upcase on a non-alphabetical character returns the character unchanged. "42".upcase == "42")

puts fluffy.name
# Here we do the same thing as line 37. It does exactly the same thing, hence the output is the same. 

puts name
# Here we output the value of `name` which is now pointing towards integer 43, hence it outputs 43. 

# Question
#   So what happens if we don't invoke #to_s on variable `name` in the initialize method. 
#   puts fluffy.name would raise an error because we can't call upcase on an Integer.  