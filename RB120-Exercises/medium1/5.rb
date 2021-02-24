class Minilang
  def initialize(program)
    @stack = []
    @register = 0
    @program = program
  end

  def eval
    @program.split.each do |token|
      if number?(token)
        @register = token.to_i
      else
        begin
          self.send(token.downcase)
        rescue NoMethodError
          invalid_method(token)
          break
        end
      end
    end
  end

  private

  def number?(token)
    token =~ /\A[-+]?\d+\z/
  end

  def push
    @stack << @register
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
    @register = @stack.pop
  end

  def print
    puts @register
  end

  def invalid_method(token)
    puts "Invalid token: #{token}"
  end
end

Minilang.new('PRINT').eval
#0

Minilang.new('5 PUSH 3 MULT PRINT').eval
# 15

Minilang.new('5 PRINT PUSH 3 PRINT ADD PRINT').eval
# 5
# 3
# 8

Minilang.new('3 PUSH PUSH 7 DIV MULT PRINT ').eval
# 6

Minilang.new('4 PUSH PUSH 7 MOD MULT PRINT ').eval
# 12

Minilang.new('-3 PUSH 5 XSUB PRINT').eval
# Invalid token: XSUB

Minilang.new('-3 PUSH 5 SUB PRINT').eval
# 8

Minilang.new('6 PUSH').eval
# (nothing printed; no PRINT commands)
