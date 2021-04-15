require 'date'

class Meetup
  def initialize(year, month)
    @year = year
    @month = month
  end

  def day(weekday, schedule)
    weekday = weekday.capitalize
    schedule = schedule.downcase

    case schedule
    when 'first'
      date = Date.new(@year, @month, 1)
    when 'second'
      date = Date.new(@year, @month, 8)
    when 'third'
      date = Date.new(@year, @month, 15)
    when 'fourth'
      date = Date.new(@year, @month, 22)
    when 'fifth'
      date = Date.new(@year, @month, 29)
    when 'teenth'
      date = Date.new(@year, @month, 13)
    when 'last'
      date = Date.new(@year, @month, -1) - 6
    end

    last_day = [date + 6, Date.civil(@year, @month, -1)].min

    (date..last_day).each do |day|
      return date if date.strftime('%A') == weekday
      date += 1
    end
    nil
  end
end

# p meetup = Meetup.new(2016, 7)
# p meetup.day('Friday', 'last')

=begin

Can I use date?

Jan, Mar, May, July, Aug, Oct, Dec - 31 days
Apr, June, Septemer, Nov - 30 days
Feb - 28 days, 29 days in leap years.

First day - always between 1st and 7th of month
  - is today same as the weekday?
  - keep incrementing until it is.

Second - always between 8th and 14th
Third - always betwwen 15th and 21st
Fourth - always between 22nd and 28th
Fifth - always between the 29th and 31st
last - between the 22nd and the 31st of the month depending on the number of days in the month


=end
