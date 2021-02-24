It was very difficult to understand the requirements of this question.
I tried to solve the question with a friend the first time, and we reached
out to the simplest solution that we could think of.
(Which turned out to be the solution for the Further Exploration)

This gets all the tests to return `true` but there was a nagging itch in my head about not understanding how an actual Circular Queue works, so I went back to the drawing board.

```Ruby
class CircularQueue
  def initialize(number)
    @array = []
    @max_size = number
  end

  def enqueue(number)
    if @array.size != @max_size
      @array << number
    else
      dequeue
      @array << number
    end
  end

  def dequeue
    @array.shift
  end
end
```

The second time around yielded a different result but not quite the answer I was
looking for. The problem with the second time is that I had relied on the argument that was passed into the `enqueue` method to help me determine the oldest position.

This answer resulted in getting all the test codes to return `true`. However, it would
not work as soon as I mixed the arguments passed into `enqueue` method with another object such as `a` or `b` which tells me again that I'm not fulfilling the requirements.

```Ruby
class CircularQueue
  def initialize(size)
    @array = Array.new(size)
    @next_position = 0
    @oldest_position = 0
  end

  def enqueue(number)
    find_next_position
    if full?
      dequeue
      @array[@oldest_position] = number
    else
      @array[@next_position] = number
    end
  end

  def find_next_position
    @array.each_with_index do |element, index|
      return @next_position = index if element.nil?
    end
  end

  def find_oldest_position
    if empty?
      @oldest_position = rand(@array.size)
    else
      numbers = @array.select { |element| element.is_a? Integer}
      @oldest_position = @array.index(numbers.min)
    end
  end

  def dequeue
    find_oldest_position
    removed = @array[@oldest_position]
    @array[@oldest_position] = nil
    removed
  end

  def empty?
    @array.all? { |element| element == nil }
  end

  def full?
    @array.all? { |element| element != nil }
  end
end

# The changes made below would fail the test

queue = CircularQueue.new(3)
puts queue.dequeue == nil

queue.enqueue(1)
queue.enqueue(2)
puts queue.dequeue == 1

queue.enqueue(3)
queue.enqueue(4)
puts queue.dequeue == 2

queue.enqueue("a")
queue.enqueue("b")
queue.enqueue(7)
puts queue.dequeue == "a"
puts queue.dequeue == "b"
puts queue.dequeue == 7
puts queue.dequeue == nil
```

The third time around was when I finally understood what it means that the circle
is connected end-to-end.

While the first object that goes into the queue can go in any position at all, the next position at which an input goes is actually directly related to the position of the previously queued object.

For example, take the given first test with a queue of size 3.
If we start at index 0, the next position will always be index 1 and not
just any position that is empty or has a value of `nil`.
If we start at index index 3, the next position will always be index 0.

This is related to the circular "shape" of the queue. The next position wraps around the circular shape of the queue.

By understanding this, I could finally figure out how to set `@next_position` and
`@oldest_position` and finally arriving to a solution that is coded slightly different but
uses the same mechanics to the solution provided.

```Ruby
class CircularQueue
  def initialize(size)
    @buffer = Array.new(size)
    @next_position = 0
    @oldest_position = 0
  end

  def enqueue(object)
    dequeue if full?
    @buffer[@next_position] = object
    find_next_position
  end

  def dequeue
    removed_value = @buffer[@oldest_position]
    @buffer[@oldest_position] = nil
    find_oldest_position
    removed_value
  end

  def find_next_position
    @next_position = (@next_position + 1) % @buffer.length
  end

  def find_oldest_position
    if empty?
       @oldest_position = 0
    else
      @oldest_position = (@oldest_position + 1) % @buffer.length
    end
  end

  def empty?
    @buffer.count(nil) == @buffer.length
  end

  def full?
    @buffer.count(nil) == 0
  end
end
```

Pun intended but I found that it was hard to wrap my head around the mechanics.
Even looking at the circular images at the wiki didn't quite help me understand it.
The only reason I was able to understand how the Circular Queue works was due to
having played and experimented with a similar method that wraps around a "circular"
loop for Caesar cipher.

```ruby




```







