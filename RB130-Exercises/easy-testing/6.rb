require 'minitest/autorun'

class NoExperienceError < StandardError; end

class Employee
  def hire
    raise NoExperienceError.new "inexperienced"
  end
end

class Test < Minitest::Test
  def test_raise_no_experience_error
    employee = Employee.new
    assert_raises(NoExperienceError) do
      employee.hire
    end
  end
end
