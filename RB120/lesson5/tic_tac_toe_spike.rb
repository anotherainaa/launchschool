class Board
  def initialize
    # 3 x 3 grid
    # what data structure to use?
    # array / hash of square objects?
    # array / hash of strings or integers
  end
end

class Square
  def initialize
    # maybe a status to keep track of this square's mark
  end
end

class Player
  def initialize
    # maybe a marker to kep track of this player's symbol (x or o)
  end

  def mark
    # mark the grid with the player's "mark"
  end

  def play
    # player choose a place on the board to mark
    # computer will choose randomly or based on strategy
  end
end

class TTTGame
  def play
    display_welcome_message
    loop do
      display_board
      player_choose
      break if someone_won? || board_full?
      computer_choose
      break if someone_won? || board_full?
    end
    display_result
    display_goodbye_message
  end
end

game = TTTGame.new
game.play
