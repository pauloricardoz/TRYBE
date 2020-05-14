let n = 7;
let text = "     "
let v = [];
for (let index = 0; index < n; index++) {
  v.push(" ");

}

let inicio = Math.trunc(n / 2);
//v[inicio] = "*";
//console.log(v.join(" "));
for (let i = 0; i <= n; i++) {
  v[inicio - (i - 1)] = " ";
  v[inicio + (i - 1)] = " ";
  v[inicio - i] = "*";
  v[inicio + i] = "*";
  if (inicio - i < 0) {
    break
  }
  if (v[0] == "*") {
    v.fill("*");
    console.log(v.join(" "));
    break;
  }
  console.log(v.join(" "));
}
