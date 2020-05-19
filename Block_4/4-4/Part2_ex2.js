function lowerNumberInArray(arrayWithNumbers=[2, 3, 6, 7, 10, 1]) {
  let biggest=arrayWithNumbers[0];
  let indexBiggest=0;
  for (const index in arrayWithNumbers) {
    if (arrayWithNumbers[index]>biggest) {
      biggest=arrayWithNumbers[index];
      indexBiggest=index;
      
    }
  }
  return indexBiggest;
}

console.log(lowerNumberInArray());