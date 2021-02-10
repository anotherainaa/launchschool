class Animal
end

class Cat < Animal
end

class Bird < Animal
end

cat1 = Cat.new
cat1.color


# In this exercise, Ruby will look through [Cat, Animal, Object, Kernel, BasicObject]
# It will go through all the superclasses and will not find the method color
# and finally return nomethod error.