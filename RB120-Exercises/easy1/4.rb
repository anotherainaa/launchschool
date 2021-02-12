class Book
  attr_accessor :title, :author

  def to_s
    %("#{title}", by #{author})
  end
end

book = Book.new
book.author = "Neil Stephenson"
book.title = "Snow Crash"
puts %(The author of "#{book.title}" is #{book.author}.)
puts %(book = #{book}.)

# Here, we want to allow the title and the author of an instance of class Book to be retrieved and changed 
# from outside of the class. 

# Hence, we choose `attr_accessor` which creates a getter method for attributes title and author. 
# We can't choose only `attr_reader` only or `attr_writer` only as that would cause this code to raise an error. 
# We can choose to use both shorthands `attr_reader` and `attr_writer` but `attr_accessor` is preferred in that case.   
# This allows the code to ouput the expected outcome. 

# Further exploratiion
#   Is it better to create and initialize at the same time.
#   By separating the steps, we would allow instances of books to be created without any instance variables to be set upon creation. 
#   Calling title or author on an instance of book class where those attributes are not set would return nil and can cause confusion to a programmer. 
#   (How can we check if nil is a valid value of an instance variable in a class? )
#   Creating and initializing at the same time would allow us to define what details are required for creating an instance of the class from the start. 
 