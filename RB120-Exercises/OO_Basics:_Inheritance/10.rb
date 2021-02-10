# 1 - create a module named transportation
# 2 - it contains three classes, Vehicle, Truck and Car
# 3 - Truck and car should inherit from Vehicle

module Transportation
  class Vehicle
  end

  class Car < Vehicle
  end

  class Truck < Vehicle
  end
end

# This is an example of namespacing? 
# namepsacing is grouping similar classes together within a module.
# this makes it easier to recognize the purpose of the contained classes 
# It also prevents collision of classes of the same name. 

# to instantiate do the below:
# Transportation::Vehicle.new
# Transportation::Car.new
# Transportation::Truck.new