# 1 - create a Towable module 
# 2 - In it, create a method named tow that prints I can tow a trailer! when invoked. 
# 3 - Include it in Truck class

module Towable
  def tow
    puts "I can tow a trailer!"
  end
end

class Truck
  include Towable
end

class Car
end

truck1 = Truck.new
truck1.tow

# if you mistakenly define a module using the keyword class and include it in a class
# it returns a typeerror! wro argument. 

# Here we include the module Towable into class Truck which gives it access to the method `#tow`

# Towable contains the method #tow. 
# we give Truck access to the #tow method in Towable by using the reserved keyword `include` in Truck
# (to include the module. )