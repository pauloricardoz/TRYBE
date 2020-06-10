const assert = require('assert');
// escreva a função addOne para passar nos testes abaixo:
const addOne = (myArray) => {
  let newArray = [];
  for (let i = 0; i < myArray.length; i++) {
    newArray.push(myArray[i] + 1);
  }
  console.log(newArray);
  return newArray;
};
//
const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function', 'sem funcao');
assert.deepEqual(output, expected, `erro1 -> ${output} - ${expected}`);
assert.deepEqual(myArray, unchanged, 'erro2');
asserts.deepEqual([1, 2, 3, 4], [2, 3, 4, 5], 'erro3');
