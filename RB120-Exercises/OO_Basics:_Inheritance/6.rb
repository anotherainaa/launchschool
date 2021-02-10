# 1 - create a class named `Vehicle`
# 2 - upon instantiation, assigns the passed in argument to @year
# 3 - Both `Truck` and `Car` ahould inherit from Vehicle. 

class Vehicle
  attr_reader :year

  def initialize(year)
    @year = year
  end
end

module Towable
  def tow
    'I can tow a trailer!'
  end
end

class Truck < Vehicle
  include Towable
end

class Car < Vehicle
end

truck1 = Truck.new(1994)
puts truck1.year
puts truck1.tow

car1 = Car.new(2006)
puts car1.year

# This demonstrates that sometimes both are needed.
# It's possible to inherit from both a module and a class at the same time.

# What's the difference? 
# A class can only inherit from one superclass which is suitable for hierarichal relationships
# while you can inherit from many modules. This is Ruby's way of implementing multiple inheritance

# Class inheritance represents a is_a relationship:  A truck is a vehicle
# while modules represnts a has_a relationship: A truck has a tow(able)? 

