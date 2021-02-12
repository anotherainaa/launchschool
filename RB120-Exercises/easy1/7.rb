class Car
  attr_accessor :mileage

  def initialize
    @mileage = 0
  end

  def increment_mileage(miles)
    total = mileage + miles
    self.mileage = total # Can also do @mileage
  end

  def print_mileage
    puts mileage
  end
end

car = Car.new
car.mileage = 5000
car.increment_mileage(678)
car.print_mileage  # should print 5678

# Notes
#   In the original code we have `mileage = total` on line 10
#   Ruby understands this mileage as a initializing a local variable and not re-assgining the value of instance variable `@mileage`
# We fixed the code by making the code access the setter method #mileage=. To do that, we provide an explicit caller 
# `self.mileage` . `self` representing the instance variable as an explicit caller. 

# Referring the instance variable `@mileage` directly bypasses the setter method entirely which may not be what we want. 
# For example, the setter method could be applying `#to_i` to the parameter (input) to ensure that inputs are always Integer objects.
# Without this, we could re-assign `@mileage` to a string value. 
