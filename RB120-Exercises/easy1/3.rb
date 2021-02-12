
class Book
  attr_reader :author, :title

  def initialize(author, title)
    @author = author
    @title = title
  end

  def to_s
    %("#{title}", by #{author})
  end
end

book = Book.new("Neil Stephenson", "Snow Crash")
puts %(The author of "#{book.title}" is #{book.author}.)
puts %(book = #{book}.)

# Notes
#   Judging from line 16, we want to be able to get the title and author of the instance book
#   To allow that, we can add getter methods the class Book.  
#   Here, I'm choosing `attr_reader` which only create getter methods for `@author` and `@title.`


# Further exploration
# Why do we not use `attr_writer` or `attr_accessor`?   
#   As metioned above, the exercise only seem to want to get the title and author of the book. 
#   We may not want anybody to be able to change the title and the author of the book. 
#   `attr_writer` would not allow us to get the title and author of the book and does not solve the problem. (It will allow us to chnage the title and author)
#   `attr_accessor` would allow us to do both, retrieve the title and author and also to change it. 
#   But we may not want to allow the title and author to be changed outside of the class for some reason, hence `attr_reader` being the best case here. 

#  What if we implemented the getter and setter method manually instead? Would this change the behavior in any way? 
#  Manually implementing getter and setter methods and using Ruby's shorthand method does the exact same thing.
#  However, if we decide that the title or the author needs to be displayed in a certain format, implementing the method and setter methods manually will give us the freedom to do so. 
