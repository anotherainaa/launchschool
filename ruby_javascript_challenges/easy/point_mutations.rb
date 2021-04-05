class DNA
  def initialize(strand)
    @strand = strand
  end

  def hamming_distance(sequence)
    difference = 0
    short = @strand.size < sequence.size ? @strand : sequence

    0.upto(short.size - 1) do |index|
      difference += 1 if @strand[index] != sequence[index]
    end
    difference
  end
end

=begin

hamming distance
- accepts another dna sequence for comparison
- if the given sequence is longer than the strand dna, compute over the shorter length

Input: string, a dna sequence
Output: number representing the number of difference between the two dna

data structure:
- String -> number representing the hamming distance

algorithm
- are the two dnas the same length?
  - if yes, compare the two strands, for each nucleus,
    - increment count if they are not the same.
  - if not the same, use the shorter length to compute?
    - ignore the rest of strang from the longer dna?

=end
