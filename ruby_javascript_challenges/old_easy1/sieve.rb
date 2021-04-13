class Sieve
  def initialize(last_number)
    @numbers = (2..last_number).to_a
  end

  def primes
    primes = []
    until @numbers.empty?
      next_prime = @numbers.shift
      primes << next_prime
      @numbers.reject! { |num| num % next_prime == 0 }
    end
    primes
  end
end

# The problem
# Take the first prime, reject all the multiples of it
# Take the next prime, reject all the multiples of it
# keep going until you reach the end.
# the numbers that are not rejected as you keep going are prime numbers.
