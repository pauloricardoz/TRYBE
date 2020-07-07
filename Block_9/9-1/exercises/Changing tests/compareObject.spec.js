const {obj1, obj2, obj3} = require('./compareObject')
// implemente seus testes aqui
test('comparing objects', () => {
  expect(obj1).toEqual(obj2);
  expect(obj1).not.toEqual(obj3);
  expect(obj3).not.toEqual(obj2);

})
