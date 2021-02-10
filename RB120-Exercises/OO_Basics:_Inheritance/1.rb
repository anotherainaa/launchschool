# 1 - create two classes, `Truck` and `Car` that both inherit from vehicle

class Vehicle
  attr_reader :year

  def initialize(year)
    @year = year
  end
end

class Truck < Vehicle
end

class Car < Vehicle
end

truck1 = Truck.new(1994)
puts truck1.year

car1 = Car.new(2006)
puts car1.year

# We create two new classes `Truck` and `Car` and make them both inherit from class `Vehicle`.
# `Car` and `Truck` are sub-classes while `Vehicle` is a superclass. 
# Inheriting from `Vehicle` allows the instances of class `Car` and `Truck` to have 
# access to the methods defined in class `Vehicle`, hence allowing instances  `truck1` and `car1` to invoke method `year1`