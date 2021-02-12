class Person
  def initialize(first_name, last_name)
    @first_name = first_name.capitalize
    @last_name = last_name.capitalize
  end

  def first_name=(name)
    @first_name = name.capitalize
  end

  def last_name=(name)
    @last_name = name.capitalize
  end

  def to_s
    "#{@first_name} #{@last_name}"
  end
end

person = Person.new('john', 'doe')
puts person

person.first_name = 'jane'
person.last_name = 'smith'
puts person

# In this problem, we chose to write setter methods for first_name and last_name manually
# We choose this because this code examples wants the first_name and last_name to be stored capitalized when initalizing an instance of this class
# Hence, we assume that whenever we choose to change the values of @first_name and @last_name we assume that we want them to be stored capitalize 
# as per what's written in the method body for initalize. 
# We can't use `attr_writer` because it would assign the given value directly to an instance variable. 
