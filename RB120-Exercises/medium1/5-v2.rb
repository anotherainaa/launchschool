# Notes and questions

# When do you check that the stack is empty to raise the EmptyStack error?
# LS exercise is using Set. Why? What is it?
# https://www.rubyguides.com/2018/08/ruby-set-class/

class MinilangError < StandardError; end
class BadTokenError < MinilangError; end
class EmptyStackError < MinilangError; end

class Minilang
  ACTIONS = %w(PUSH ADD SUB MULT DIV MOD POP PRINT)

  def initialize(program)
    @program = program
  end

  # need a method to interpret the message

  def eval
    @stack = []
    @register = 0
    @program.split.each do |token|
      eval_token(token)
    end
  rescue MinilangError => error
    puts error.message
  end

  private

  def eval_token(token)
    if ACTIONS.include?(token)
      send(token.downcase)
    elsif
      is_a_number?(token)
      @register = token.to_i
    else
      raise BadTokenError, "Invalid token: #{token}"
    end
  end

  def is_a_number?(token)
    token.to_i.to_s == token
  end

  def print
    puts @register
  end

  def push
    @stack.push(@register)
  end

  def add
    @register += pop
  end

  def sub
    @register -= pop
  end

  def mult
    @register *= pop
  end

  def div
    @register /= pop
  end

  def mod
    @register %= pop
  end

  def pop
    raise EmptyStackError, "Empty stack!" if @stack.empty?
    @register = @stack.pop
  end
end


# Minilang.new('PRINT').eval
# # 0

Minilang.new('5 PUSH 3 MULT PRINT').eval
# 15

# Minilang.new('5 PRINT PUSH 3 PRINT ADD PRINT').eval
# # 5
# # 3
# # 8

# Minilang.new('5 PUSH 10 PRINT POP PRINT').eval
# # 10
# # 5

Minilang.new('5 PUSH POP POP PRINT').eval
# Empty stack!

# Minilang.new('3 PUSH PUSH 7 DIV MULT PRINT ').eval
# # 6

# Minilang.new('4 PUSH PUSH 7 MOD MULT PRINT ').eval
# # 12

# Minilang.new('-3 PUSH 5 XSUB PRINT').eval
# Invalid token: XSUB

# Minilang.new('-3 PUSH 5 SUB PRINT').eval
# # 8

# Minilang.new('6 PUSH').eval
# # (nothing printed; no PRINT commands)
