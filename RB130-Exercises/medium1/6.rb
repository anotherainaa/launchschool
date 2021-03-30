# array = [1, 2, 3]

# comparator = proc { |a, b| b <=> a }

# p array.sort(&comparator)

# With the &
# Two things happen
# if the object is a proc, it will convert it into a block
# If is not a proc object, it will try to call #to_proc to it
# . It's a symbol to proc operation, although can be called symbol to block.


# Note that & in a method parameter and argument object is not the same thing
# . While & applied to an argument object causes the object to be converted to
# block


# . & applied to method parameter causes the associated object to be converted
# . to a proc.

# You can call & to an object that contains a method.


# def convert_to_base_8(n)
#   n.method_name.method_name # replace these two method calls
# end

# # The correct type of argument must be used below
# base8_proc = method(argument).to_proc

# # We'll need a Proc object to make this code work. Replace `a_proc`
# # with the correct object
# [8, 10, 12, 14, 16, 33].map(&a_proc)


def convert_to_base_8(n)
  n.to_s(8).to_i # replace these two method calls
end

# The correct type of argument must be used below
base8_proc = method(:convert_to_base_8).to_proc

# We'll need a Proc object to make this code work. Replace `a_proc`
# with the correct object
result = [8, 10, 12, 14, 16, 33].map(&base8_proc)

# [10, 12, 14, 16, 20, 41]
p result
