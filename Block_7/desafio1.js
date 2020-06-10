const assert = require('assert');
// escreva a função addOne para passar nos testes abaixo:
const addOne = (arr) => {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(arr[i] + 1);
  }
  return newArray;
};
//
const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function', 'sem funcao');
assert.deepEqual(output, expected, `erro1 -> ${output} - ${expected}`);
assert.deepEqual(myArray, unchanged, 'erro2 -> ${myArray} - ${unchanged}');
const v1 = [1, 2, 3, 4];
const v2 = [2, 3, 4, 5];
assert.deepEqual(addOne(v1), v2, `erro3 -> ${v1} - ${v2}`);
