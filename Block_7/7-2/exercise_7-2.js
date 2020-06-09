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

function turno(objeto, chave, valor) {
  objeto[chave] = valor;
}

function listaChaves(objeto) {
  console.log(Object.keys(objeto));
}

function tamanho(objeto) {
  console.log(Object.keys(objeto).length);
}

console.log(lesson2);
tamanho(lesson2);
