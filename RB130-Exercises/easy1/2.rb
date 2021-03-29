def compute(arg = nil)
  if block_given?
    yield(arg)
  else
    "Does not compute."
  end
end

p compute { 5 + 3 } == 8
p compute { 'a' + 'b' } == 'ab'
p compute == 'Does not compute.'

p compute(1) { |num| num + 3 } == 4
p compute("hello") { |word| word + 'b' } == 'hellob'
p compute("hello") == 'Does not compute.'


# Further exploration

# . Modify the method so that it takes a single argument
# . And yields that argument to the block
