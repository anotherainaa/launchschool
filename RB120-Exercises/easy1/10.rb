# Refactor the classes so that they all use a common superclass

class Vehicle
  attr_reader :make, :model

  def initialize(make, model)
    @make = make
    @model = model
  end

  def to_s
    "#{make} #{model}"
  end
end

class Car < Vehicle
  def wheels
    4
  end
end

class Motorcycle < Vehicle
  def wheels
    2
  end
end

class Truck < Vehicle
  attr_reader :payload

  def initialize(make, model, payload)
    super(make, model)
    @payload = payload
  end

  def wheels
    6
  end
end

my_car = Car.new("Nissan Days", 2013)
my_motorcyle = Motorcycle.new("Yamaha rxz", 2017)
my_truck = Motorcycle.new("Ford Ranger", 2015)

puts my_car
puts my_motorcyle
puts my_truck

# further exploration
# Would it make sense to define a `wheels` method in vehicle even if all of the remaining class would override it? 
# It depends if `wheels` is an important state that needs to be tracked for what we want to achieve. 
# It makes sense to have it if we want to 