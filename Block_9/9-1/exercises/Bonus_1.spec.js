const getChange = require('./Bonus_1');


test('no change/coins just an empty array', () => {
  let result = getChange(1, 1); // 
  let expected = [];
  expect(result).toEqual(expected);
})

test('expect an array containing [50, 20, 10, 5]', () => {
  result = getChange(215, 300); // 
  expected = [50, 20, 10, 5];
  expect(result).toEqual(expected);
})


test('expect an array containing [100, 10, 2, 2]', () => {
  result = getChange(486, 600); // 
  expected = [100, 10, 2, 2];
  expect(result).toEqual(expected);

})

test('expect an array containing [200, 100, 50, 20, 10, 5, 2, 1]', () => {
  result = getChange(12, 400); // 
  expected = [200, 100, 50, 20, 10, 5, 2, 1];
  expect(result).toEqual(expected);

})

test('/^Error: paid value is not enough$/', () => {
  expect(() => {
    getChange(100, 10);
  }).toThrow();
  
}) 
