function sumNumbers(number) {
  let sum = 0;
  for (let index = 1; index <= number; index++) {
    sum += index;
  }
  return sum;
}
console.log(sumNumbers(5));