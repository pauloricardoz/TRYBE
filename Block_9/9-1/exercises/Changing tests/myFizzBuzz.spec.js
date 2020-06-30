const myFizzBuzz = require('./myFizzBuzz');

test('my Fizz Buzz', () => {
  expect(myFizzBuzz(15)).toBe('fizzbuzz');
  expect(myFizzBuzz(3)).toBe('fizz');
  expect(myFizzBuzz(20)).toBe('buzz');
  expect(myFizzBuzz(4)).toBe(4);
});
// implemente seus testes aqui

