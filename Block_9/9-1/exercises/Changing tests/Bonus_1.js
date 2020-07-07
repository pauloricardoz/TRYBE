const { get } = require('http');

function getChange(payable, paid) {
  const coins = [200, 100, 50, 20, 10, 5, 2, 1];
  const change = [];
  const { length } = coins;
  let remaining = paid - payable;
  if (remaining < 0) throw new Error('paid value is not enough');
  let index = 0;
  while (remaining > 0) {
    if (remaining - coins[index] < 0) {
      index++;
    } else {
      change.push(coins[index]);
      remaining -= coins[index];
    }
  }

  // escreva seu código aqui...

  return change;
}
module.exports = getChange;