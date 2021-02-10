# allow truck to accept a second argument upon instantiation
# name the parameter `bed_type` 
# implement the modification so that Car continues to only accept one argument

class Vehicle
  attr_reader :year

  def initialize(year)
    @year = year
  end
end

class Truck < Vehicle
  attr_reader :bed_type

  def initialize(year, bed_type)
    super(year)
    @bed_type = bed_type
  end
end

class Car < Vehicle
end

truck1 = Truck.new(1994, 'Short')
puts truck1.year
puts truck1.bed_type

car1 = Car.new(2000)
puts car1.year

# We modify Truck's initialize to take a second parameter `bed_type`
# we use super passing in only one argument `year` because the 
# initialize method in Vehicle takes only one argument. 
# (sending 2 will raise an argument error.)
# we make no modifications to Vehicle or Car.
# we also need to getter method for class Truck to allow `@bedtype` to be accesed outside the class. 





