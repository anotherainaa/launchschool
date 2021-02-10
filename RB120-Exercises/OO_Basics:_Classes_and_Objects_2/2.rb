# add a method named #rename that renames kitty when invoked

class Cat
attr_accessor :name

  def initialize(name)
    @name = name
  end

  def rename(new_name)
    self.name = new_name
  end
end
 
kitty = Cat.new('Sophie')
p kitty.name
kitty.rename('Chloe')
p kitty.name

# My original code and explanation
#   Here, I've added a new instance method called rename
#   which takes a parameter name 
#   and re-assigns the value of instance variable @name to name

# LS notes
#   In example, we use self.name
#   Using a getter method, we can retrieve a value by invoking the method
#   we need to use self so that Ruby knows the difference between initializing
#   a local variable and invoking a setter method

# rename accepts one argument which represents a new name. 
# to rename kitty, we invoke the setter method for @name and pass new_name as an argument. 