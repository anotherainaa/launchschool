class Pet
  def initialize(name, age)
    @name = name
    @age = age
  end
end

class Cat < Pet
  def initialize(name, age, fur_color)
    super(name, age)
    @fur_color = fur_color
  end

  def to_s
    "My cat #{@name} is #{@age} and has #{@fur_color} fur."
  end
end

pudding = Cat.new('Pudding', 7, 'black and white')
butterscotch = Cat.new('Butterscotch', 10, 'tan and white')
puts pudding, butterscotch

# Notes
#   Need to make sure that we are only passing in two arguments to the original implementation of initialize inherited from superclass Pet
#   to do that, we use super and deliberately pass in two variables only.
#   we then initalize an instance variable @fur_clor and assign it to the value of fur_color. 

# In order to get the line 21 to output as per the expected output, we implement a to_s method as per the requirement. 
# The string representation uses the instance variables `@name` `@age` and `@fur_color` accodringly. 
# Question?  Would it be better to use self.getter_method

# Further exploration
# If we included @color in pet, we could omit the initalize method in `Cat` class. 
# We can omit it, because we are not planning to pass any less or more arguments that what was defined in the initalize of `Pet` 
# when creating an instance of Cat. 

# Is it a good idea? 
#   Yes, if we plan to want to keep track of the state @colors for every single `Pet` object or the subclasses that inherit from it. 
# Why not? 
#   That may not be what we want to do. We may only want to specifically keep the colors of the `Cat` class and there could be 
#   pets that don't have a color variation. Although I'd imagine animals that ended up becoming pets tend to have a color variation. 
#   Implementing colors would make sense if we were implementing class for the purpose of a pet shop that requires people to differentiate
#   the specific colors of each of pets whether of the same species or not.  
#   Check the unique solution section for more explanations.

# What problems may arise? 
# existing dependecies! => fragile base class.
