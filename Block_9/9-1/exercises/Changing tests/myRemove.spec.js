const myRemove = require('./myRemove');


// implemente seus testes aqui
test('Removing item id', () => {
  let vetor = [1, 2, 3, 4];
  expect(myRemove(vetor, 3)).toEqual([1, 2, 4]);
  expect(myRemove([1, 2, 3, 4], 5)).toEqual(vetor);
}); 
