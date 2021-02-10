# 1 - modify `#start_engine` in Truck by appending `'Drive fast, please!'` 
# to the return value of the method in `Vehicle
# The `'fast'` in the string should be the value of spped.   

class Vehicle
  def start_engine
    'Ready to go!'
  end
end

class Truck < Vehicle
  def start_engine(speed)
    super() + " Drive #{speed}, please!"
  end
end

truck1 = Truck.new
puts truck1.start_engine('fast')

# Here, we need to make sure that we invoke `super()` with parentheses so that we;re not 
# passing any arguments to the original start_engine which takes no parameters. 
# Failing to do so will result in a argumenterror. 
