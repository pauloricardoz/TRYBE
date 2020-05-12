
let grade = -1;

switch (true) {

  case (grade >100):
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

console.log(message);