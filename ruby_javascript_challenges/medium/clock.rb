class Clock
  attr_accessor :hour, :minute

  MINUTES_IN_DAY = 24 * 60

  def initialize(hour, minute)
    @hour = hour
    @minute = minute
  end

  def self.at(hour, minute = 0)
    Clock.new(hour, minute)
  end

  def to_s
    "#{format("%.2d", hour)}:#{format("%.2d", minute)}"
  end

  def +(minute)

  end

  def -(minute)

  end

  def ==(other_clock)
    hour == other_clock.hour && minute == other_clock.minute
  end

  private

  def convert_minutes_after_midnight
    total_minute = hour * 60 + minute
    total_minutes % MINUTES_IN_DAY
  end

  def convert_minutes_before_midnight
    self.hour, self.minute = @delta_minute.divmod(60)
    self.hour %= 24
    self
  end
end


=begin
# PEDAC

What do we know?
- Creating a clock object
- With a class method self.at that takes a number. and  optional argument
  - representing minutes.

Class method at
- uses the 24 hour format.
- we create an instance when we use this method?
- we seem to be able to call instance methods on this?

Method -
the clock method must be able to - an integer representing minutes.
- and get the correct answer.

Method ==
we should be able to check that two time are of equal value.

Method to_s
- Converts the clock to this format - '08:00'

=end
