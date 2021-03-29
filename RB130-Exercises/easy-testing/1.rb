require 'minitest/autorun'

class Test < Minitest::Test
  def setup
    @value = 12
  end

  def test_value_is_odd
    assert_equal(true, @value.odd?)
  end

  def test_value_is_odd2
    assert(@value.odd?, "value is not odd")
  end
end
