const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalsByType = (type) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter((animal) => animal.type === type);
      if (arrayAnimals.length !== 0) {
        return resolve(arrayAnimals);
      }

      return reject({ error: 'Não possui esse tipo de animal.' });
    }, 100);
  })
);

const getListAnimals = (type) => (
  findAnimalsByType(type).then(list => list)
);


it('teste ok', async () => {
    const t = await getListAnimals('Dog')
    return expect(t).toEqual([{ name: 'Dorminhoco', age: 1, type: 'Dog' },
    { name: 'Soneca', age: 2, type: 'Dog' }])
 
})

it('teste Fail', async () => {
  expect.assertions(1)
  try {
    await getListAnimals('Dog')
    
  } catch (e) {
    console.log(e)
    return expect(e).toEqual({error:'Não possui esse tipo de animal.'})
    
  }

})
