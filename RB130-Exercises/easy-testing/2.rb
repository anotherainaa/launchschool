require 'minitest/autorun'

class Test < Minitest::Test
  def setup
    @value = 'XYZ'
  end

  def test_value_is_downcased?
    assert_equal('xyz', @value.downcase)
  end
end
