# How can this class be fixed to be resistant to future problems?

class Flight
  def initialize(flight_number)
    @database_handle = Database.init
    @flight_number = flight_number
  end
end

# Prevent the database from being overwritten through the setter method?