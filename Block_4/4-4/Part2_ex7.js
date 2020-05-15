function stringWithSameEnd(firstString = "Trybe", secondString = "be") {

  if (firstString.substr(firstString.length - secondString.length, firstString.length ) == secondString) {
    return true;
  }
  else {
    return false;
  }

}
stringWithSameEnd();