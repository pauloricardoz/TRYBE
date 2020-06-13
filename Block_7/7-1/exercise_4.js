const frase = 'Tryber x aqui!';
const skills = ['JavaScript', 'HTML', 'CSS', 'Git', 'Teste Unitarios'];
function funcao_1(str) {
  let temp = frase.split('');
  let p = temp.map((a) => (a == 'x' ? str : a)).join('');
  return p;
}
function funcao_2(str) {
  let temp = skills.sort();
  return [
    str,
    '\nMinhas cinco principais habilidades são:\n',
    temp.join('\n'),
  ].join(' ');
}
console.log(funcao_1('Paulo'));
console.log(funcao_2(funcao_1('Paulo')));
