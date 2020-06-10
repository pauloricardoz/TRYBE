const assert = require('assert');
// escreva a função wordLengths para passar nos testes abaixo:
const wordLengths = () => {};
//
const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(
  typeof wordLengths,
  'function',
  `erro1 ${typeof wordLengths}`
);
const output = wordLengths(words);
assert.deepEqual(output, expected, `erro2 ${output} ${output}`);
