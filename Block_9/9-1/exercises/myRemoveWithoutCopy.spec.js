const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui
let vetor = [1, 2, 3, 4];
assert.deepEqual(myRemoveWithoutCopy(vetor, 3), [1, 2, 4], 'ok1');
vetor = [1, 2, 3, 4];
assert.notDeepEqual(myRemoveWithoutCopy(vetor, 3), [1, 2, 3, 4], 'ok2');
vetor = [1, 2, 3, 4];
myRemoveWithoutCopy(vetor, 1);
console.log(vetor);
assert.deepEqual(vetor, [[1, 2, 3, 4]], 'ok3');
vetor = [1, 2, 3, 4];
assert.deepEqual(myRemoveWithoutCopy(vetor, 5), [[1, 2, 3, 4]], 'ok4');
