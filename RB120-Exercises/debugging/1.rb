class Library
  attr_accessor :address, :phone, :books

  def initialize(address, phone)
    @address = address
    @phone = phone
    @books = []
  end

  def check_in(book)
    books.push(book)
  end

  def display_books
    books.each do |book|
      book.display_data
    end
  end
end

class Book
  attr_accessor :title, :author, :isbn

  def initialize(title, author, isbn)
    @title = title
    @author = author
    @isbn = isbn
  end

  def display_data
    puts "---------------"
    puts "Title: #{title}"
    puts "Author: #{author}"
    puts "ISBN: #{isbn}"
    puts "---------------"
  end
end

community_library = Library.new('123 Main St.', '555-232-5652')
learn_to_program = Book.new('Learn to Program', 'Chris Pine', '978-1934356364')
little_women = Book.new('Little Women', 'Louisa May Alcott', '978-1420951080')
wrinkle_in_time = Book.new('A Wrinkle in Time', 'Madeleine L\'Engle', '978-0312367541')

community_library.check_in(learn_to_program)
community_library.check_in(little_women)
community_library.check_in(wrinkle_in_time)

community_library.display_books

=begin

# Notes
. Books is a collection(array) of book object
. In order to display them, we have to iterate through books array
. and call diplay_data on the book object.
. In this case, we implement a display books method
. which iterates through books and displays the books
. Note that the method can now be called on the library object and not
. through the array books.

. There is not display_data instance method for array!

# LS points
. If it is something we do ofthen, we can implement a method in library
. class that does this as shown above. This would also allow us to later make
. @books invisible to the outside, in case we decide that all actions
. on books should be possible only through some library method.

=end
