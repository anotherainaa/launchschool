class Trinary
  def initialize(trinary_num)
    @trinary_num = trinary_num
  end

  def to_decimal
    return 0 if invalid_trinary?
    decimal_num = 0
    @trinary_num.reverse.chars.each_with_index do |num, index|
      decimal_num += num.to_i * (3 ** index)
    end
    decimal_num
  end

  def invalid_trinary?
    @trinary_num.match(/[^0-2]/)
  end
end
