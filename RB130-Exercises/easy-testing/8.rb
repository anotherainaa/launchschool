require 'minitest/autorun'

class Numeric
end

class SubNumeric < Numeric
end

class Test < Minitest::Test
  def test_value_is_kind_of_numeric
    value = SubNumeric.new
    assert_kind_of(Numeric, value)
  end
end
