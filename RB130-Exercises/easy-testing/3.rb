require 'minitest/autorun'

class Test < Minitest::Test
  def setup
    @value = nil
  end

  def test_value_is_nil
    assert_nil(@value)
  end

  def test_value_is_nil_2
    assert_equal(nil, @value)
  end
end
