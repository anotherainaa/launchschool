class Triangle
  def initialize(side1, side2, side3)
    @sides = [side1, side2, side3].sort
    raise ArgumentError.new "Invalid lengths" if !valid_triangle?
  end

  def valid_triangle?
    @sides.all? { |side| side > 0 } && (@sides[0] + @sides[1]) > @sides[2]
  end

  def kind
    if @sides.uniq.length == 1
      'equilateral'
    elsif @sides.uniq.length == 2
      'isosceles'
    else
      'scalene'
    end
  end
end


=begin

PEDAC

Problem
- Create a class triangle that takes only 3 sides
- Create method kind that tells what kind of triangle it is
  - Isosceles - 2 sides same size
  - Equilateral - All sides same size
  - Scalene - All sides different
- It must raise an Argument Error is the triangle is invalid.
  - One side length is less than 0
  -  Sum of lengths of any two sides must be greater than 3rd

Data Structure
- 3 ivars for 3 sides?
- Array of sides

Algorithm

constructor
- raise ArgumentError if not a valid_triangle?
- save sides into an array

kind
- if uniq sides size is 1, equilateral
  - if 2, isosceles
  - if 3, scalene

valid_triangle?
- all sides more than 0? - valid do nothing, else return false
- sort the sides
  - sum side1 and side2
- check if the sum is bigger than side 3

=end
