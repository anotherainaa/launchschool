

# 1 - Create a subclass `Dog` called `Bulldog`
# 2 - Override the `swim` method to return `can't swim`

class Dog
  def speak
    'bark!'
  end

  def swim
    'swimming!'
  end
end

class Bulldog < Dog
  def swim
    "can't swim"
  end
end

teddy = Dog.new
puts teddy.speak           # => "bark!"
puts teddy.swim           # => "swimming!"
shiro = Bulldog.new
puts shiro.speak
puts shiro.swim

# I've create a Bulldog class which inherits from the superclass Dog
# The method swim is overridden in the class Bulldog and ouputs "can't swim"
# instaed of the original "swimming"
# This is because the method lookup path first looks in Bulldog class? 