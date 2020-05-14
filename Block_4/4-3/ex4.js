let n = 5;
let text = "     "
let v = [];
for (let index = 0; index < n; index++) {
  v.push(" ");

}

let inicio = Math.trunc(n / 2);
v[inicio] = "*";
console.log(v.join(" "));
for (let i = 1; i <= n; i++) {
  if (v[0] == "*")
    break;
  v[inicio - i] = "*";
  v[inicio + i] = "*";
  console.log(v.join(" "));
}
