const randomNumber = () => Math.random()*100;// Lógica de gerar o número

const isDivisible = (number) => (randomNumber() % number) === 0;

it('mocking function random', () => {
  const randomNumber = jest.fn()
  .mockReturnValue(10);
  //isDivisible(2);
  expect(randomNumber()).toBe(10);
  expect(randomNumber).toHaveBeenCalled();
})


test("testando se a função foi chamada, qual seu retorno, quantas vezes foi chamada e com quais parâmetros", () => {
  const randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);

  expect(randomNumber(10, 2)).toBe(5);
  expect(randomNumber).toHaveBeenCalled();
  expect(randomNumber).toHaveBeenCalledTimes(1);
  expect(randomNumber).toHaveBeenCalledWith(10, 2);
});