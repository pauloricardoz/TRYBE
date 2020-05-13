
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 0; i < numbers.length; i++) {
  for (let j = 0; j < numbers.length-1; j++) {
    if (numbers[j]<numbers[j+1]) {
      let temp=numbers[j+1];
      numbers[j+1]=numbers[j];
      numbers[j]=temp;
    }
    
  }
  
}
console.log(numbers.join(','));