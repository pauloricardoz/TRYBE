let number=7;
let count=0;
for (let i = 1; i < number; i++) {
  if (number%i==0) {
    count++;
  }
  if (count>1) {
    break;    //break quebra o for para nao ficar fazendo contas sem nocessidade, pois ja encontrou mais de um número que é divisor
  }
}
if (count>1) {
  console.log("No prime")
}else{
  console.log("Prime")
}
