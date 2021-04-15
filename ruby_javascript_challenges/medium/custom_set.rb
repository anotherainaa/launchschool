class CustomSet
  def initialize(array = [])
    @elements = array.uniq
  end

  def empty?
    elements.empty?
  end

  def contains?(element)
    elements.include?(element)
  end

  def subset?(other_set)
    elements.all? do |element|
      other_set.contains?(element)
    end
  end

  def disjoint?(other_set)
    elements.none? do |element|
      other_set.contains?(element)
    end
  end

  def eql?(other_set)
    return false unless elements.length == other_set.elements.length
    elements.all? do |element|
      other_set.contains?(element)
    end
  end

  def add(element)
    elements << element unless contains?(element)
    self
  end

  def ==(other_set)
    eql?(other_set)
  end

  def intersection(other_set)
    same = elements.select do |element|
      other_set.contains?(element)
    end
    CustomSet.new(same)
  end

  def difference(other_set)
    different = elements.select do |element|
      !other_set.contains?(element)
    end
    CustomSet.new(different)
  end

  def union(other_set)
    new_set = CustomSet.new(elements)
    other_set.elements.each do |element|
      new_set.add(element)
    end
    new_set
  end

  protected

  attr_accessor :elements
end

# p set = CustomSet.new([1, 2])
# p set2 = CustomSet.new()
# p set == set2
# p set.eql?(set2)

=begin

intersection(custom set object)
- checks for any values between the two objects that are duplicates.
- if the value exist in both sets, that's the intersection
- returns a new object

constructor(array?)
- it takes an array as an argument.
  - the array can have as many arguments as it wants to.
- a new custom set should be empty

empty?
- true if empty.

contains?(element)
- arg is value representing the element
- true if custom set contains the value

subset?(customset object)
- it takes a custom set object
- true if argument is a subset of the calling object
- (if the argument equals to the calling object or has more stuff
in it, it is a subset)
  - 1 is subset of empty
  - empty is not subset of 1

- it is not a subset, if arg doesn't have all/different elements that doesn't
cover all of the elements in the calling object


disjoint?(customset object)
- if at least one element is the same, false
- if all elements are different, true
  - if empty and 1 element, true
  - if 1 element and empty, true


eql?(customset object)
(overwriting the original implementation?)
- if empty and empty = true
- if the elements of the two objects are the same, even if the order is
  different, then true
- if elements are not same, not true


add(value)
- add the value to the set
- if a value already exists in the set
  - it does not add an extra value to it.
- returns the same object

intersection(custom set object)
- select any values between the two objects that are the same
- returns a new object with those values

difference(custom set object)
- select any values between the two objects that are different
- returns a new object with those values

union(custom set object)
- unite the two objects such that the duplicate objects are not duplicated
- add object to the new object only if it doesn't exist already.




=end
