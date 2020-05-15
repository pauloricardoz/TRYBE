function wageAfterTaxes(wage= 15000.10) {
  

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
    console.log("wrong wage value");
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
    console.log("Wrong value to wage");
}
console.log("Wage is " + wage.toFixed(2));
}