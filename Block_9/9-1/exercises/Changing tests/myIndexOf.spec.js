const myIndexOf = require('./myIndexOf');

test('myIndex', () => {
  expect(myIndexOf([1, 2, 3, 4], 3)).toBe(2);
  expect(myIndexOf([1, 2, 3, 4], 5)).toBe(-1);
}); 

// implemente seus testes aqui
