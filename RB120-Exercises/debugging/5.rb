class File
  attr_accessor :name, :byte_content

  def initialize(name)
    @name = name
  end

  alias_method :read,  :byte_content
  alias_method :write, :byte_content=

  def copy(target_file_name)
    target_file = self.class.new(target_file_name)
    target_file.write(read)

    target_file
  end

  def to_s
    "#{name}.#{self.class::FORMAT}"
  end
end

class MarkdownFile < File
  FORMAT = :md
end

class VectorGraphicsFile < File
  FORMAT = :svg
end

class MP3File < File
  FORMAT = :mp3
end

# Test

blog_post = MarkdownFile.new('Adventures_in_OOP_Land')
blog_post.write('Content will be added soon!'.bytes)

copy_of_blog_post = blog_post.copy('Same_Adventures_in_OOP_Land')

puts copy_of_blog_post.is_a? MarkdownFile     # true
puts copy_of_blog_post.read == blog_post.read # true

puts blog_post

=begin
# What's the problem?
. We're trying to invoke constant FORMAT from other classes.
. Constant have lexical scope which means that FORMAT is not directly accessible
. from the parent class of a subclass.
. We can add a method that help return the format from within the subclasses.
. And call the sub-class method and change the method body for to_s in the
. "parent class" to call the sub-class instance method which returns the format.
. This works because of the way the method look up chain works.
. When we invoke puts from an instance of the sub-class.
. For methdod to_s it will find the method in the Parent class File.
. But when invoking the display_format it will start from the object in this case,
. markdown and find the method display_format.

# What is the downside?
. The class `File` itself does not have a display_fromat method.
. Calling `puts` on a `File` object would raise an error.

# Is there another way to do it?
. Can I do self.FORMAT.
  . Yes, but remember that to call constant from a class the syntax is:
  . Class::CONSTANT.
  . Hence, in this case, we can call self.class::FORMAT.
. However, this seems like it would still raise an error if called from
. a instance of File class because it does not have constant FORMAT.

# LS notes
. When Ruby resolves a constant, it looks it up in a lexical scope, in this case
. , in the `File` class as well as in all of its ancestor class. Since it doesn't
. find it in any of them, it throws a `NameError`.
. You can also store the format as a method or instance method, although this
. doesnt' convery the fact that the format is fixed and cannot change.
. Which format you pick is a design choice!

# Further exploration
. What is alias_method. Check out the documentation


=end
