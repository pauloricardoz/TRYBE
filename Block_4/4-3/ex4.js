let n = 9;
let text = "     "
let v = [];
for (let index = 0; index < n; index++) {
  v.push(" ");

}
let IsEven = false;
if (n % 2 == 0)
  IsEven = true;

  let inicio = Math.trunc(n / 2); //pega o n, divide por 2 para descobrir o meio do vetor e remove as casas decimais

for (let i = 0; i <= n; i++) {
  if (v[0] == "*")
    break;
  if (IsEven == false) {

    v[inicio - i] = "*";
    v[inicio + i] = "*";
  } else {
    v[inicio - i] = "*";
    v[inicio +1+ i] = "*";
  }
  console.log(v.join(" "));
}
