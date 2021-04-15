class Element
  attr_reader :datum, :next

  def initialize(datum, next_element = nil)
    @datum = datum
    @next = next_element
  end

  def tail?
    @next.nil?
  end
end

class SimpleLinkedList
  attr_reader :head

  def initialize
    @head = nil
  end

  def push(datum)
    element = Element.new(datum, @head)
    @head = element
  end

  def size
    counter = 0
    current = @head
    while current
      counter += 1
      current = current.next
    end
    counter
  end

  def empty?
    @head.nil?
  end

  def peek
    @head.nil? ? nil : @head.datum
  end

  def to_a
    result = []
    current = @head
    while current
      result << current.datum
      current = current.next
    end
    result
  end

  def self.from_a(array)
    array = [] if array.nil?
    list = SimpleLinkedList.new
    array.reverse.each do |element|
      list.push(element)
    end
    list
  end

  def pop
    datum = @head.datum
    new_head = @head.next
    @head = new_head
    datum
  end

  def reverse
    list = SimpleLinkedList.new
    current = @head
    while !current.nil?
      list.push(current.datum)
      current = current.next
    end
    list
  end
end
