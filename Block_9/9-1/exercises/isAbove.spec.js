const isAbove = require('./isAbove');

test('is above test', () => {
  // implemente seus testes aqui
  expect(isAbove(8, 1)).toBe(true);
  expect(isAbove(1, 2)).toBe(false);
})

