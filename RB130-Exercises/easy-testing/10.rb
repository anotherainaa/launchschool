require 'minitest/autorun'

class Test < Minitest::Test
  def test_list_doesnt_include_xyz
    list = ["a", "b", "xyz"]
    refute_includes(list, 'xyz')
  end

  def test_list_doesnt_include_xyz_2
    list = ["a", "b", "xyz"]
    assert_equal(false, list.include?('xyz'))
  end
end
