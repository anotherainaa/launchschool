class Triangle
  attr_reader :sides

  def initialize(side1, side2, side3)
    self.sides = [side1, side2, side3]
  end

  def kind
    if sides.uniq.size == 1
      'equilateral'
    elsif sides.uniq.size == 2
      'isosceles'
    else
      'scalene'
    end
  end

  def sides=(sides)
    raise ArgumentError.new "Invalid triangle lengths" unless valid?(sides)
    @sides = sides
  end

  private

  def valid?(sides)
    sides.all? { |side| side > 0 } && sides.sort[0..1].sum > sides.sort[-1]
  end
end
