function getSequenceOfMoves(moves) {
  return moves.map((_, index) => moves.slice(index, index + 3));
}

module.exports = getSequenceOfMoves