let n = 5;
let vetor =new Array(n);
vetor.fill(" ",0,n)
let text = vetor.join("");


for (let i = 0; i <=n; i++) {
 
  console.log(text);
  
  text += "*"
  text=text.substr(1);
}