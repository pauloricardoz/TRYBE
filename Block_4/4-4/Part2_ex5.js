function RepetitionInArray(arrayWithNumbers = [2, 3, 2, 5, 8, 2, 3]) {
  let mostRepitedNumber=0;
  let repetitionOfMostRepitedNumber=0;
  let num = 0;
  let quant = 0;

  for (let i = arrayWithNumbers.length - 1; i >= 0; i--) {
    num = arrayWithNumbers[i];
    quant = 0;
    for (let j = i - 1; j >= 0; j--) {
      if (num === arrayWithNumbers[j]) {
        quant += 1;
      }

    }
    if (quant>repetitionOfMostRepitedNumber) {
      mostRepitedNumber=num;
      repetitionOfMostRepitedNumber=quant;
    }
  }
  return mostRepitedNumber;
}

console.log(RepetitionInArray());