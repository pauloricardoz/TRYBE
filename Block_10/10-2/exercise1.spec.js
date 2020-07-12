const num ={
  numRandom : () => Math.random() * 100
} 

describe('first exercise', () => {
  it('function call', () => {
    const numRandom = jest.spyOn(num, 'numRandom').mockReturnValue(10);
  
    expect(numRandom).not.toHaveBeenCalled()
    expect(numRandom()).toBe(10);
    numRandom.mockClear();
    expect(numRandom()).toBe(10);
    expect(numRandom).toHaveBeenCalledTimes(1)
    
  
  })
})
