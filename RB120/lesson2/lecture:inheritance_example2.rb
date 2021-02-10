# 1 - Create a new class called `Cat`
# 2 - It can do everything a dog can except swim or fetch
# Assume the methods do the exact same thing
# Hint: Don't copy paste all methods use some class Hierarchy 

class Animal
  def swim
    'swimming!'
  end

  def run
    'running!'
  end

  def jump
    'jumping!'
  end
end

class Dog < Animal
  def speak
    'bark!'
  end

  def fetch
    'fetching!'
  end
end

class Cat < Animal
  def speak
    'meow!'
  end
end

kitty = Cat.new
spot = Dog.new
puts spot.run
puts kitty.run
puts spot.fetch
puts kitty.fetch
puts Cat.ancestors
puts Dog.ancestors

# Note that example uses Pet instead of Animal
# Think about why this is a better choice than Animal. 