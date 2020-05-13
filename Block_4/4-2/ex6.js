
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let oldNumbers = 0;

for (let index = 0; index < numbers.length; index++) {
  if (numbers[index]%2 == 1) {
    oldNumbers += 1;
  }

}
console.log(oldNumbers);