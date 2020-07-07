function factorial(n) {
  let total = 1;
  for (let i = n; i > 0; i--) {
    total *= i;
  }
  return total;
}
function factorial_recursive(n) {
  if (n == 1) return 1;
  return n * factorial_recursive(n - 1);
}
console.log(factorial_recursive(3));
