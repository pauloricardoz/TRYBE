const sum = require('./Sum');
// implemente seus testes aqui
test('Sum fo two numbers', ()=> {
  expect(sum(4, 5)).toBe(9);
  expect(sum(0, 0)).toBe(0);
  expect(() => sum(4, '5')).toThrowError(new Error('parameters must be numbers'));
});