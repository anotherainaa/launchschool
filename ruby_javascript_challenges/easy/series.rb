class Series
  attr_reader :number_string

  def initialize(string)
    @number_string = string
  end

  def slices(length)
    raise ArgumentError.new if length > number_string.size
    results = []

    number_string.chars.each_index do |index|
      series = number_string.chars[index, length].map(&:to_i)
      results << series if series.size == length
    end

    results
  end
end

=begin

Problem
- Return the consecutive number using the specified lenght

Input: Number representing length on a series object?
Output: array of series combincations

- Must throw an error when the length is longer than the string.

Data Structure
- Series object with string ivar representing number
- Series instance method that takes a number,
  returns an array of arrays, representing the series.

Algorithm
- initialize results array
- like working on sub array?
- for each starting point, cut the string in to the appropriate lenght
-   save only if teh length is the right size.
- when finished iterating
- return the results.


=end
