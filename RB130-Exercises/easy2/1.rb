def step(start_num, end_num, step_num)
  counter = start_num
  loop do
    yield(counter)
    break if counter + step_num > end_num
    counter += step_num
  end
  counter
end

p step(1, 10, 3) { |value| puts "value = #{value}" }
