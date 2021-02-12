# write a class called Square that inherits from Rectangle

class Rectangle
  def initialize(height, width)
    @height = height
    @width = width
  end

  def area
    @height * @width
  end
end

class Square < Rectangle
  def initialize(length_of_side)
    super(length_of_side, length_of_side)
  end
end

square = Square.new(5)
puts "area of square = #{square.area}"

# We only pass in one argument in square, because the length of side are always the same for squares. 
# We need to ensure that we tackle the difference in arguments for squares and rectangles 
# iF we don't do it, line 20 will raise an error wrong nmuber of arguments. 
# we use the super method and pass into it two arguments to satisfy the iniatlize requirement from the superclass. 
