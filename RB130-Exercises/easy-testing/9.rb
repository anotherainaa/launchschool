require 'minitest/autorun'

class FakeArray
  def process
    self
  end
end

class Test < Minitest::Test
  def test_process_method
    list = FakeArray.new
    list2 = FakeArray.new
    assert_same(list, list.process)
  end
end
