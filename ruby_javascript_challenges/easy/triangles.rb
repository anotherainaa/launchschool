class Triangle
  attr_reader :sides

  def initialize(*sides)
    self.sides = sides
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
    if sides.any? { |side| side <= 0 }
      raise ArgumentError.new "Invalid triangle lengths"
    elsif sides.sort[0..1].sum <= sides.sort[-1]
      raise ArgumentError.new "Invalid triangle lengths"
    end
    @sides = sides
  end
end
