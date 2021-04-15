class SecretHandshake
  SECRET_HANDSHAKE = {
    1 => 'wink',
    10 => 'double blink',
    100 => 'close your eyes',
    1000 => 'jump'
  }

  def initialize(number)
    @binary_number = number.to_i.to_s(2)
  end

  def commands
    command = []

    @binary_number.reverse.chars.each_with_index do |num, index|
      code = num.to_i * (10 ** index)
      command << SECRET_HANDSHAKE[code] if SECRET_HANDSHAKE[code]
      command.reverse! if code == 10000
    end
    command
  end
end

