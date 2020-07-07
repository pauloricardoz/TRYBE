const mySum = require('./mySum');


test('sum in an array', () => {
  expect(mySum([1, 2, 3, 4])).toBe(10);
  expect(mySum([1, -2, -3, 4])).toBe(0);
});
/* // implemente seus testes aqui
assert.strictEqual(mySum([1, 2, 3, 4]),10)
assert.strictEqual(mySum([1, -2, -3, 4]),0)
 */

