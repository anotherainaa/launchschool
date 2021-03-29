require 'minitest/autorun'

class Test < Minitest::Test
  def test_list_is_empty
    list = []
    assert_empty(list)
  end

  def test_list_is_empty_2
    list = []
    assert_equal(true, list.empty?)
  end
end
