class Crypto
  def initialize(text)
    @text = text
  end

  def normalize_plaintext
    @text.delete('^A-Za-z0-9').downcase
  end

  def size
    text_size = normalize_plaintext.size
    Math.sqrt(text_size).ceil
  end

  def plaintext_segments
    normalize_plaintext.chars.each_slice(size).map(&:join)
  end

  def ciphertext(delimiter = '')
    result = []
    encoded = ''
    size.times do |index|
      plaintext_segments.each do |word|
        encoded << word[index] if word[index]
      end
      result << encoded
      encoded = ''
    end
    result.join(delimiter)
  end

  def normalize_ciphertext
    ciphertext(' ')
  end
end
