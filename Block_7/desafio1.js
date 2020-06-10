const assert = require('assert');
// escreva a função addOne para passar nos testes abaixo:
const addOne = () => {};
//
const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function', 'sem funcao');
assert.deepEqual(output, expected, 'erro1');
assert.deepEqual(myArray, unchanged, 'erro2');
