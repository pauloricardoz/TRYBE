
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newNumbers = numbers.slice();

for (let i = 0; i < newNumbers.length; i++) {
  
  if (i<newNumbers.length-1) {
    newNumbers[i]*=newNumbers[i+1]
  }else
  {
    newNumbers[i]*=2
  }
   
  
}
console.log(newNumbers.join(','));