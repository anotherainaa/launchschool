# Modify this class so both flip_switch and the setter method switch= are private methods.

class Machine
  def start
    flip_switch(:on)
  end

  def stop
    flip_switch(:off)
  end

  private

  attr_writer :switch

  def flip_switch(desired_state)
    self.switch = desired_state
  end
end

my_machine = Machine.new
my_machine.start
p my_machine.switch
# Note that we can't call this method unless we define a getter method
my_machine.stop
p my_machine.switch

# We move the `attr_writer :switch` and `flip_switch` method under the reserved
# keyword `private` which turns the two method into private methods.

# We need to remove the reference to `self` in the method body of instance methods
# `start` and `stop` because we can't call self on private methods.
# (unless we're using Ruby version 2.7 onwards.)

# The reason why we have to call `self.switch` on line 17 is because
# Ruby would consider `switch = desired_state` as a local variable instead of a
# method call of the setter method `switch=`
