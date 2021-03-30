# Text analyzer - Sandwich code

# Required to read a text file
# Try searching the web for how to do this.
# Take a look at the File class in the Ruby docs.

# What if you can't do it?
# Just put the data in directly, using an array of one line.

# Read the text file in the #process method
# pass the text to the block provided in each call.

class TextAnalyzer
  def process
    file = File.open("./sample_text.txt", "r")
    yield(file.read)
    file.close
  end
end

analyzer = TextAnalyzer.new
# your implementation => 3 paragraphs
analyzer.process do |text|
  paragraph = text.split("\n\n")
  puts "#{paragraph.count} paragraph"
end

# analyzer.process { } # your implementation => 15 lines
analyzer.process do |text|
  lines = text.split("\n")
  puts "#{lines.count} lines"
end

analyzer.process do |text|
  words = text.split(" ")
  puts "#{words.count} words"
end

# analyzer.process { }# your implementation => 126 words


# Notes
# . Notice how we have some sandwich code in the process method
# . we open, process and then we close the file.
