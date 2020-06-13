function str(texto) {
  texto = texto.split(' ');
  let maior = 0;
  texto.map((a) => (a.length > maior ? (maior = a.length) : maior));
  return maior;
}
console.log(str('Antônio foi no banheiro e não sabemos o que aconteceu'));
