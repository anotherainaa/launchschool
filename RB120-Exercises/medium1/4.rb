class CircularQueue
  def initialize(size)
    @array = Array.new(size)
    @next_position = 0
    @oldest_position = 0
  end

  def enqueue(number)
    find_next_position
    find_oldest_position
    if full?
      @array[@oldest_position] = number
    else
      @array[@next_position] = number
    end
  end

  def find_next_position
    @array.each_with_index do |element, index|
      return @next_position = index if element.nil?
    end
    @next_position = nil
  end

  def find_oldest_position
    if empty?
      @oldest_position = 0
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

# class CircularQueue
#   def initialize(number)
#     @array = []
#     @max_size = number
#   end

#   def enqueue(number)
#     if @array.size != @max_size
#       @array << number
#     else
#       @array.shift
#       @array.push(number)
#     end
#   end

#   def dequeue
#     @array.shift
#   end
# end

queue = CircularQueue.new(3)
puts queue.dequeue == nil

queue.enqueue(1)
queue.enqueue(2)
puts queue.dequeue == 1

queue.enqueue(3)
queue.enqueue(4)
puts queue.dequeue == 2

queue.enqueue(5)
p queue
queue.enqueue(6)
p queue
queue.enqueue(7)
p queue
puts queue.dequeue == 5
puts queue.dequeue == 6
puts queue.dequeue == 7
puts queue.dequeue == nil

queue = CircularQueue.new(4)
puts queue.dequeue == nil

queue.enqueue(1)
queue.enqueue(2)
puts queue.dequeue == 1

queue.enqueue(3)
queue.enqueue(4)
puts queue.dequeue == 2

queue.enqueue(5)
queue.enqueue(6)
queue.enqueue(7)
puts queue.dequeue == 4
puts queue.dequeue == 5
puts queue.dequeue == 6
puts queue.dequeue == 7
puts queue.dequeue == nil
