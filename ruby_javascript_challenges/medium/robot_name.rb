class Robot
  @@used_names = []

  def name
    return @name if !@name.nil?

    until !@@used_names.include?(@name)
      @name = generate_new_name
    end

    @@used_names << @name
    @name
  end

  def generate_new_name
    temp_name = ''
    2.times { temp_name << rand(65..90).chr }
    3.times { temp_name << rand(0..9).to_s }
    temp_name
  end

  def reset
    @@used_names.delete(@name)
    @name = nil
  end
end



=begin

PEDAC

Problem
- generate random name for ronot that is booted up for the first time
- sometimes we need to reset to factory settings
  - name wiped out.
- when rebooted, a new name is generated.

Note:
- the names must be random , they should not follow a predictable sequence
  - random names means rish of collisions
    - your name should not use the same name twice when avoidable

Name looks like this: BC811
Two random letter and 3 random numbers.

rand(65..90) => .char for randome letters
rand(0..9) => must format it to 3 letters.


Methods:
- name
- a name gets generated when you call name method.
- if a robot already has a name return the name

How to check if a name has already been used?
- Is there a way to check state of other instances?
- If no, we need to track it with an array?


=end
