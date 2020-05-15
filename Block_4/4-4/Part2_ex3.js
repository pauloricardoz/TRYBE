function lowerNumberInArray(arrayWithNumbers=[2, 4, 6, 7, 10, 0, -3]) {
  let Lowerst=arrayWithNumbers[0];
  let indexLower=0;
  for (const index in arrayWithNumbers) {
    if (arrayWithNumbers[index]<Lowerst) {
      Lowerst=arrayWithNumbers[index];
      indexLower=index;
      
    }
  }
  return indexLower;
}

console.log(lowerNumberInArray());