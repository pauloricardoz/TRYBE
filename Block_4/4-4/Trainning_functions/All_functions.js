function wageAfterTaxes(wage = 15000.10) {


  switch (true) {
    case (wage >= 5189.82):
      wage -= 570.88;
      break;
    case (wage >= 2594.93):
      wage *= (1 - .11);
      break;
    case (wage >= 1556.95):
      wage *= (1 - .09);
      break;
    case (wage >= 0 && wage < 1556.95):
      wage *= (1 - 0.08);
      break;
    default:
      return("wrong wage value");
      break;
  }

  switch (true) {
    case (wage > 4664.68):
      wage *= (1 - .275); wage += 869.36;
      break;
    case (wage >= 3751.06):
      wage *= (1 - .225); wage += 636.13;
      break;
    case (wage >= 2826.66):
      wage *= (1 - .15); wage += 354.8;
      break;
    case (wage >= 1903.99):
      wage *= (1 - .075); wage += 142.8;
      break;
    case (wage > 0 && wage < 1903.99):
      wage *= (1 - 0);
      break;
    default:
      return("Wrong value to wage");
  }
  return("Wage is " + wage.toFixed(2));
}

function division(a, b) {
  return(a / b);
}



function profit(priceSell, productCost) {

  let profit = true;
  if (productCost >= 0 || priceSell >= 0) {
    profit = 1000 * (priceSell - productCost) * 0.8;
  }
  else {
    console.log("Error, Poduct price or Selling price lower than zero");
    return false;

  }
  return(profit)
}
function odd(a, b, c) {
  let resultado = true;
  if (a % 2 == 1 || b % 2 == 1 || c % 2 == 1) {
    resultado = true;
  }
  else {
    resultado = false;
  }
  return(resultado)
}
function even(a, b, c) {

  let resultado = true;
  if (a % 2 == 0 || b % 2 == 0 || c % 2 == 0) {
    resultado = true;
  }
  else {
    resultado = false;
  }
  return(resultado)
}

function gradeProg(grade = -1) {

  switch (true) {

    case (grade > 100):
      message = "Invalid grade";
      break;
    case (grade >= 90):
      message = "A";
      break;
    case (grade >= 80):
      message = "B";
      break;
    case (grade >= 70):
      message = "C";
      break;
    case (grade >= 60):
      message = "D";
      break;
    case (grade >= 50):
      message = "E";
      break;
    case (grade < 50 && grade >= 0):
      message = "F";
      break;

    default:
      message = "Invalid grade";
  }

  return(message);
}
function Queen(chessChoose="Queen") {

  let chessPieces = ["king", "queen", "rook", "bishop", "knight", "pawn"]

  let lowerName = chessChoose.toLowerCase();
  let message = null;
  switch (lowerName) {
    case 'king':
      message = "All directions, one space";
      break;

    case 'queen':
      message = "Cross and diagonals, any spaces";
      break;

    case 'rook':
      message = "Cross, any spaces";
      break;

    case 'bishop':
      message = "diagonals";
      break;

    case 'pawn':
      message = "two space forward, one left or right";
      break;
    default:
      message = "Invalid piece of chess";
  }

  return(message);
} 
function angle(a, b, c) {


  if (a + b + c == 180) {
    return(true);
  }
  else {
    return(false);
  }

  //console.log("Not a triangle")
}

function sign(val = -1) {
  if (val > 0) {
    return("positive");
  }
  else if (val == 0) {
    return("zero");
  }
  else {
    return("negative");
  }


}

function biggerOfThree(a, b, c) {
  let maior = null

  if (maior < a) {
    maior = a;
  }
  if (maior < b) {
    maior = b;
  }
  if (maior < c) {
    maior = c;
  }
  return(maior);

}
function printBig(a, b) {
  if (a > b) {
    return(a);
  }
  else {
    return(b);
  }
}

function sum(a, b) {
  return(a + b);
}
function minus(a, b) {

  return(a - b);
}
function mult(a, b) {
  return(a * b);
}

/* Declare the function 'myFunc' */
function mod(a, b) {
  return(a % b);
}



console.log(sum(3,3));
console.log(minus(3,4));
console.log(mult(3,3));
console.log(division(12,3));
console.log(mod(3,3));
console.log(profit(30,36));
console.log(odd(3,3,6));
console.log(even(3,5,4));
console.log(gradeProg(3));
console.log(Queen("Queen"));
console.log(angle(30,60,90));
console.log(sign(10));
console.log(biggerOfThree(10,20,5));
console.log(printBig(20,1));
