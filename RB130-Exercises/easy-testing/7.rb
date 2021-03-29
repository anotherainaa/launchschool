require 'minitest/autorun'

class Numeric
end

class Test < Minitest::Test
  def test_value_is_numeric_class
    value = Numeric.new
    assert_instance_of(Numeric, value)
  end

    def test_value_is_numeric_class_2
    value = Numberic.new
    assert_equal(true, value.is_a?(Numeric))
  end
end
