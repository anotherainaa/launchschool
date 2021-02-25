class Animal
  def initialize(diet, superpower)
    @diet = diet
    @superpower = superpower
  end

  def move
    puts "I'm moving!"
  end

  def superpower
    puts "I can #{@superpower}!"
  end
end

class Fish < Animal
  def move
    puts "I'm swimming!"
  end
end

class Bird < Animal
end

class FlightlessBird < Bird
  def initialize(diet, superpower)
    super
  end

  def move
    puts "I'm running!"
  end
end

class SongBird < Bird
  def initialize(diet, superpower, song)
    super(diet, superpower)
    @song = song
  end

  def move
    puts "I'm flying!"
  end
end

# Examples

unicornfish = Fish.new(:herbivore, 'breathe underwater')
penguin = FlightlessBird.new(:carnivore, 'drink sea water')
robin = SongBird.new(:omnivore, 'sing', 'chirp chirrr chirp chirp chirrrr')

=begin

# Notes
. Here we have a couple of animal classes all inheriting from the Animal class.
. Bird class further sub-classes two classes called FlightlessBird and SongBird.
. An error is raised when trying to create an instance of Songbird.
. This is due to the fact that we are passing an extra argument for Song Bird
. which has an extra state called song.
. The initialize method in songbird is inherited from it's ancestor class
. Animal through Parent class Bird.
. The initialize method only takes 2 parameter instead of 3.
. In order to fix this, we must pass only 2 arguments to the original initialize
. method. We can use the reserved keyword super and passing the two relevant
. arguments `diet` and `superpower` and initializing a new state `song`
. for the third argument.

# LS Notes
. We must explicitly pass `diet` and `superpower` to `super`.
. These arguments are then sent up the method lookup chain to
. Animal#Initialize.
. If we don't explicitly pass 2, super will pass all 3 arguments.
. This raises an error because `Animal#Initialize` expects two arguments only.

# Further exploration
. The initialize method for Flightless bird is unnecessary because
. it does the exact same thing that Animal#initalize method does.
. In this case, we should stay with the DRY principle.

=end
