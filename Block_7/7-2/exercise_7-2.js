const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};
//first exercise -Crie uma função para adicionar o turno da manhã na lesson2
function turno(objeto, chave, valor) {
  objeto[chave] = valor;
}

//second exercise - Crie uma função para listar as keys de um objeto
function listaChaves(objeto) {
  console.log(Object.keys(objeto));
}

//third exercise - Crie uma função para mostrar o tamanho de um objeto
function tamanho(objeto) {
  console.log(Object.keys(objeto).length);
}

//fourth exercise - Crie uma função para listar os valores de um objeto
function valores(objeto) {
  Object.entries(objeto).map((a) => console.log(`${a[0]}: ${a[1]}`));
}

//fifth exercise - Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3.
const allLessons = Object.assign({}, { lesson1 }, { lesson2 }, { lesson3 });

// sixth exercise - Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
function totalEstudantes(objeto) {
  let numero = 0;

  for (let index = 0; index < Object.keys(objeto).length; index++) {
    numero += objeto[Object.keys(objeto)[index]].numeroEstudantes;
  }
  return numero;
}

//seventh exercise - Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto
function getValueByNumber(objeto, index) {
  return objeto[Object.keys(objeto)[index]];
}

//eighth exercise - Crie uma função que verifique se o par (chave / valor) existe na função
function verifyPair(objeto, chave, valor) {
  if (objeto[chave] != undefined && objeto[chave] == valor) return true;
  return false;
}

//console.log(lesson2);
//tamanho(lesson2);
//valores(lesson1);
//console.log(allLessons);
//console.log(totalEstudantes(allLessons));
//console.log(getValueByNumber(lesson1, 0));

//console.log(verifyPair(lesson3, 'turno', 'noite'));
//console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));

//bonus

//first bonus - Crie uma função para contar quantos estudantes assistiram às aulas de Matemática.
function estudantesAula(aula) {
  let estudantes = 0;
  for (let index = 0; index < Object.keys(allLessons).length; index++) {
    if (allLessons[Object.keys(allLessons)[index]].materia == aula)
      estudantes += allLessons[Object.keys(allLessons)[index]].numeroEstudantes;
  }
  return estudantes;
}

//console.log(estudantesAula('Matemática'));

//second bonus - Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes
function createReport(objeto, professor) {
  let estudantes = 0;
  let materia = [];
  for (let index = 0; index < Object.keys(objeto).length; index++) {
    if (objeto[Object.keys(objeto)[index]].professor == professor) {
      estudantes += objeto[Object.keys(objeto)[index]].numeroEstudantes;
      materia.push(objeto[Object.keys(objeto)[index]].materia);
    }
  }
  //return estudantes;
  return { professor: professor, aulas: materia, estudantes: estudantes };
}
console.log(createReport(allLessons, 'Maria Clara'));
