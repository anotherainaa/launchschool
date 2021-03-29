require 'minitest/autorun'

class Test < Minitest::Test
  def test_list_include_xyz
    list = ['a', 'b']
    assert_includes(list, 'xyz')
  end

  def test_list_include_xyz_2
    list = ['a', 'b']
    assert_equal(true, list.include?('xyz'), "#{list} must include 'xyz'")
  end
end
