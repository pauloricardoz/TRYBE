const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => (
  // Adicione o código aqui.
  new Promise((resolve, reject)=>{
    const lookedFor = Animals.find(animal => animal.name === name);
    if(lookedFor === undefined) {
      const er =  ('Nenhum animal com esse nome!');
      reject(er);
    }
    else {
      resolve (lookedFor);
    }
  })
)

const getAnimal = (name) => {
  // Adicione o código aqui.
  return typeof(name)==='string'? findAnimalByName(name).then(animal => animal) : findAnimalByAge(name).then(animal => animal)
}

const findAnimalByAge = (age) => (
  // Adicione o código aqui.
  new Promise((resolve, reject)=>{
    const lookedFor = Animals.find(animal => animal.age === age);
    if(lookedFor === undefined) {
      const er =  ('Nenhum animal com essa idade!');
      reject(er);
    }
    else {
      resolve (lookedFor);
    }
  })
)


// ---------------------

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});


describe('Testando promise - findAnimalByAge', () => {
  describe('Quando existe o animal com o idade procurada', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal(1).then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal(3).catch(error =>
        expect(error).toEqual('Nenhum animal com essa idade!')
      );
    });
  });
});