class Person
  attr_reader :name
  attr_accessor :location

  def initialize(name)
    @name = name
  end

  def teleport_to(latitude, longitude)
    @location = GeoLocation.new(latitude, longitude)
  end
end

class GeoLocation
  attr_reader :latitude, :longitude

  def initialize(latitude, longitude)
    @latitude = latitude
    @longitude = longitude
  end

  def to_s
    "(#{latitude}, #{longitude})"
  end

  def ==(other_location)
    self.to_s == other_location.to_s
  end

  # def ==(other)
  #   latiture == other.latitude && longitude == other.longitude
  # end
end

# Example

ada = Person.new('Ada')
ada.location = GeoLocation.new(53.477, -2.236)

grace = Person.new('Grace')
grace.location = GeoLocation.new(-33.89, 151.277)

ada.teleport_to(-33.89, 151.277)

puts ada.location                   # (-33.89, 151.277)
puts grace.location                 # (-33.89, 151.277)
puts ada.location == grace.location # expected: true
                                    # actual: false

=begin

# Notes
. Testing for equivalence.
. Originally it returns false because we are comparing whether two
. location objects are the same object or not.
. Here, we implement a way to compare the value of the location
. to the value of another location.

# Question - What is the difference between the two ways compared
. In my case, we are comparing two string, which mean the value must be
. identical to return false.

. In the second case, we are comparing floats and using the `==` from float
. hence, integer and float of the same value will be considered equal
. and may be more suitable for this case.

# Where does the original == method comes from?
. Ruby BasicObject#== which compares whether two objects are the same object.

=end
