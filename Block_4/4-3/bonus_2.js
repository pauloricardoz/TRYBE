let number=555555551;
let count=0;
for (let i = 1; i < number; i++) {
  if (number%i==0) {
    count++;
  }
  if (count>1) {
    break;
  }
}
if (count>1) {
  console.log("No prime")
}else{
  console.log("Prime")
}