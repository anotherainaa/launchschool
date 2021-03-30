# Listening device

class Device
  def initialize
    @recordings = []
  end

  def record(recording)
    @recordings << recording
  end

  def listen
    if block_given?
      recording = yield
      record(recording)
    end
  end

  def play
    puts @recordings.last
  end
end

listener = Device.new
listener.listen { "Hello World!" }
listener.listen { "Yoasobi!" }
p listener.listen
listener.play


# We use block given to ensure that we only yield if a block is given.
# We also only add the recoding into recordings if a block is given.

# We can write it another way as well

# The benefit to the below is that we won't add the recording if
# the yield value is falsey.
# This can guard against adding `nil` to recordings.

# def listen
#   recording = yield if block_given?
#   record(recording) if recording
# end
#

# In both cases, the method will return `nil` because a conditional
# statement that does not evaluate to any branches returns nil

# Not having the conditional statement on line 42 will actually
# cause the method to return the return value of calling the record method
# which may not be what we want.
