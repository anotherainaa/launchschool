# 1 - change the code so that creating a new `Truck` automatically invokes `#start_engine`

class Vehicle
  attr_reader :year

  def initialize(year)
    @year = year
  end
end

class Truck < Vehicle

  def initialize(year)
    super
    start_engine
  end

  def start_engine
    puts 'Ready to go!'
  end
end

truck1 = Truck.new(1994)
puts truck1.year

# In order to get truck to automatically invoke #start_engine when instantiating an instance, 
# we override the `intialize` method to invoke #start_engine. 
# However, we still want to keep what the original functionality of `initialize` method 
# and use `super` to do that.  

# incoking a super within a method makes Ruby lok at the inheritance hierarchy for a method 
# with the same name. 

# invoking `super` without parenthese passes all arguments to `Vehicle#initialize`