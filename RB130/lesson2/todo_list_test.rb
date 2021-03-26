require 'minitest/autorun'
require "minitest/reporters"
Minitest::Reporters.use!

require_relative './todo_list.rb'

class TodoListTest < MiniTest::Test

  def setup
    @todo1 = Todo.new("Buy milk")
    @todo2 = Todo.new("Clean room")
    @todo3 = Todo.new("Go to gym")
    @todos = [@todo1, @todo2, @todo3]

    @list = TodoList.new("Today's Todos")
    @list.add(@todo1)
    @list.add(@todo2)
    @list.add(@todo3)
  end

  # Your tests go here. Remember they must start with "test_"
  def test_to_a
    assert_equal(@todos, @list.to_a)
  end

  def test_size
    assert_equal(3, @list.size)
  end

  def test_first
    assert_equal(@todo1, @list.first)
  end

  def test_shift
    todo = @list.shift
    assert_equal(@todo1, todo)
    assert_equal([@todo2, @todo3], @list.to_a)
  end

  def test_pop
    todo = @list.pop
    assert_equal(@todo3, todo)
    assert_equal([@todo1, @todo2], @list.to_a)
  end

  def test_done?
    assert_equal(false, @list.done?)
  end

  def test_add_raise_error
    assert_raises(TypeError) { @list.add(nil) }
    assert_raises(TypeError) { @list.add("hi") }
    assert_raises(TypeError) { @list.add([2, 3]) }
  end

  def test_shovel
    new_todo = Todo.new("Test")
    @list << new_todo
    @todos << new_todo
    assert_equal(@todos, @list.to_a)
  end

  def test_add_alias
    new_todo = Todo.new("Test 2")
    @list.add(new_todo)
    @todos << new_todo
    assert_equal(@todos, @list.to_a)
  end


  def test_item_at
    assert_equal(@todo2, @list.item_at(1))
    assert_equal(@todo3, @list.item_at(2))
    assert_raises(IndexError) { @list.item_at(100) }
  end

  def test_mark_done_at
  end

  def test_mark_undeone_at
  end

  def test_done!
  end

  def test_remove_at
  end

  def test_to_s
  end

  def test_to_s_2
  end

  def test_to_s_3
  end

  def test_each
  end

  def test_each_2
  end

  def test_select
  end
end
