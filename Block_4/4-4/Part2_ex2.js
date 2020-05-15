function BiggerNameInArray(arrayWithNumbers=[2, 3, 6, 7, 10, 1]) {
  let biggest=arrayWithNumbers[0];
  indexLower=0;
  for (const index in arrayWithNumbers) {
    if (arrayWithNumbers[index]>biggest) {
      biggest=arrayWithNumbers[index];
      indexLower=index;
      
    }
  }
  return indexLower;
}

console.log(BiggerNameInArray());