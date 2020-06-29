// const assert = require('assert');
const { timeStamp } = require('console');
const myRemoveWithoutCopy = require('./myRemoveWithoutCopy');


test('test removing element in an array', () => {
  let vetor = [1, 2, 3, 4];
  expect(myRemoveWithoutCopy(vetor, 3)).toEqual([1, 2, 4]);
  vetor = [1, 2, 3, 4];
  expect(myRemoveWithoutCopy(vetor, 3)).not.toEqual([1, 2, 3, 4]);
  vetor = [1, 2, 3, 4];
  myRemoveWithoutCopy(vetor, 1);
  console.log(vetor);
  expect(vetor).not.toEqual([1, 2, 3, 4]);
  vetor = [1, 2, 3, 4];
  expect(myRemoveWithoutCopy(vetor, 5)).toEqual([1, 2, 3, 4]);
})