
let chessPieces = ["king", "queen", "rook", "bishop", "knight", "pawn"]
let chessChoose = "Queen"
let lowerName = chessChoose.toLowerCase();
let message=null;
switch (lowerName) {
  case 'king':
    message="All directions, one space";
    break;

  case 'queen':
    message="Cross and diagonals, any spaces";
    break;

  case 'rook':
    message="Cross, any spaces";
    break;

  case 'bishop':
    message="diagonals";
    break;
  
  case 'pawn':
    message="two space forward, one left or right";
    break;
  default:
    message="Invalid piece of chess";
}

console.log(message);