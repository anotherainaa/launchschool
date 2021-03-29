# write a program that deciphers and prints each of these names

# Input: takes an array of encypted names
# output: outputs these names decrypted.
# problem: using rot13 decypher.
# - for each letter, they are 13 letters ahead
# - a, position 1 = n, position 14
# using ceaser cipher

# Alg
# need a alphabet array to do caesor cipher
# for each name, caser cipher it
  # iterate through all the letters, for each letter downcased
    # get all the positions - 13
    # save each character
    # get the new name - capitalize it
  # save the new name into a new array of names
# output each name


ENCRYPTED_PIONEERS = [
  'Nqn Ybirynpr',
  'Tenpr Ubccre',
  'Nqryr Tbyqfgvar',
  'Nyna Ghevat',
  'Puneyrf Onoontr',
  'Noqhyynu Zhunzznq ova Zhfn ny-Xujnevmzv',
  'Wbua Ngnanfbss',
  'Ybvf Unvog',
  'Pynhqr Funaaba',
  'Fgrir Wbof',
  'Ovyy Tngrf',
  'Gvz Orearef-Yrr',
  'Fgrir Jbmavnx',
  'Xbaenq Mhfr',
  'Fve Nagbal Ubner',
  'Zneiva Zvafxl',
  'Lhxvuveb Zngfhzbgb',
  'Unllvz Fybavzfxv',
  'Tregehqr Oynapu'
].freeze

ALPHABET = ("a".."z").to_a

def decipher_name(full_name)
  result = []
  full_name.split.each do |name|
    temp = ''
    name.chars do |char|
      if ALPHABET.include?(char.downcase)
        current_letter_index = ALPHABET.find_index(char.downcase)
        new_letter_index = current_letter_index - 13 % 26
        new_letter = ALPHABET[new_letter_index]
        temp << new_letter
      else
        temp << char
      end
    end
    result << temp.capitalize
  end
  result.join(" ")
end

def decipher(names)
  result = []
  names.each do |full_name|
    result << decipher_name(full_name)
  end
  result.each { |name| puts name }
end

ENCRYPTED_PIONEERS.each do |encypted_name|
  puts decipher_name(encypted_name)
end


# Change the method such that is can use .ord and .char
# Decipher all kinds of texts and not just names
