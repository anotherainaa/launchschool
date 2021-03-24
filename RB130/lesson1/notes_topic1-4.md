# Lesson 1: Blocks

## Topics 1 - 4
1. Introduction
2. Closures in Ruby
3. Calling methods with blocks
4. Writing methods that take blocks

### Intro - Closures in Ruby

This time, we'll be learning about blocks.

What is a closure?
- It's a way to pass around a chunk of unnamed code to be executed later. Think Go's analogy with the backpack.

How does Ruby work with closures?
There are a few ways:
- Procs
- Lambda
- Blocks

We're going to be focusing on blocks first.

### Calling methods with blocks.

We've been doing it all these while.

**For example**
```ruby
3.times do |num|
  puts num
end
# => Return value is 3

[1, 2, 3].each do |num|
  puts num
end

# => Return value is the calling object [1, 2, 3]

[1, 2, 3].map do |num|
  num + 1
end
# => Return value is transformed array [2, 3, 4]
```

Why do the methods behave the way they do above?
Why do some methods take a block and some of them ignore the block in it's return value while another method can use the code in the block in it's return value?

The most important thing is to remember that it's related to how the code is implemented.

How do you know what would happen when you pass a block in to a method?
- In a nutshell, study documentation or play around with the code to figure it out.

### Writing methods that take blocks

#### Yielding

All methods can take block as an implicit parameter.
We must use the `yield` keyword to make the method use the block.

#### Passing execution to the block

It's important to know the difference between method implementation and method invocation.

In what order does a method execution look like when you pass into it a block?

```ruby
def test
  yield if block_given?
  puts "hello"
end

test { puts "world" }
```

- We start from the calling the `test` method passing into in a block as an argument. (It's an implicit parameter, we don't assign the block to a variable.)
- We move into the method implementation.
- First, we check if a block is given.
- This returns `true` so `yield` is executed.
- We jump into the block and output "world".
- We come back to the method and move to the next line.
- We output "hello"
- We get to the end of the method, `nil` is the return value of the method because the last expression in the method is invocation of `puts` which returns `nil`.

Notice that we "jump" to the block, which is similar to how a method behaves.

#### Yielding with an argument

Blocks can take an argument. Blocks are already an argument but they can further take an argument themselves. We've already been doing them. They are called block parameter.

**Example**
```ruby
3.times do |num|
  puts num
end
```
The block parameter is `num` in between the two `||`.

To pass in arguments into the block, do this.
```ruby
def increment(number)
  if block_given?
    yield(number + 1)
  end
  number + 1
end
```

#### Return value of yielding to the block

We can do something like this.

```ruby
def test(str)
  puts "Before: #{str}"
  after = yield(str)
  puts "After #{str}"
end

test("hello") do |word|
  word.slice(1, 2)
end
```

A block can have a return value just like a method.
A block can mutate an argument just like a method.
A block returns the last expression in the block similar to a method.
It can be useful to think of blocks as unnamed methods.

#### When to use blocks in your own methods?

1. Good for deferring method invocation to later. This allows the programmer to refine the method to the specific use case. A good example is `select` method.
  - If we cannot do this, we have to make specific method to handle it or have to use conditionals? but we don't know what are the exact situations that we will use the code for, hence, it is useful to give the method users the ability to refine the code later through blocks.
2. For sandwich code. When there is a before and after on some code. The point is we don't care what the code is in the middle, we know that there will be something to do before and after it. Blocks are useful for this.


#### Methods with an explicit block parameter

Methods can take an explicit block parameter.

What is the syntax to do this? - &
```ruby
def test(&block)
  puts "What's &block #{block}"
end

test { sleep(1) }
```

What does it do?
- It creates a simple `Proc` object.

How can we run the block?
- Using the `#call` method on the block.

Why do we use it?
- To give us more flexibility.
- Since the block is assigned to a variable, we can pass it to another method.

```ruby
def test2(block)
  puts "hello"
  block.call
  puts "good-bye"
end

def test(&block)
  puts "1"
  test2(block)
  puts "2"
end
```

**This is a simplified explanation**
We'll get more to this later.


Summary
- Blocks are Ruby's way to implement closures, a way of passing a chunk of code to be executed later
- Blocks can return a value
- Block don't complain when you pass it the wrong number of argumetns
- Blocks are good for deferring implementation to later. For example, the select method. It's a generic method that can do lots of different things depending on what we do in the block. Method callers have the ability to refine the code for specific use case.
- It's a good way to implement sandwich code. When you need to do something before and after doing something. But what do we do in between the before and after? That's the point, we don't care, it could be anything. A good use case if `File` . You open and then need to close it after. Or tracking time et .
