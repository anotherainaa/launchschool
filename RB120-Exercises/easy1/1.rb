# complete the class so that the test cases work as intended. 
# you can add any methods or instance variables you need
# but do not make the implementation details public

class Banner
  def initialize(message)
    @message = message
  end

  def to_s
    [horizontal_rule, empty_line, message_line, empty_line, horizontal_rule].join("\n")
  end

  private

  def horizontal_rule
    dashes = "-" * @message.length
    "+-" + dashes + "-+"
  end

  def empty_line
    spaces = " " * @message.length
    "| " + spaces + " |"
  end

  def message_line
    "| #{@message} |"
  end
end


banner = Banner.new('To boldly go where no one has gone before.')
puts banner

banner = Banner.new('')
puts banner