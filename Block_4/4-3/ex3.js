let n = 5;
let vetor = new Array(n);   //cria um array com um tamanho n
vetor.fill(" ", 0, n)       //Preenche o array com espaços vazios // essa linha e a debaixo pode ser substituido por um "for"
let text = vetor.join("");  //Passa o array para uma string


for (let i = 0; i <= n; i++) {

  console.log(text);

  text += "*"
  text = text.substr(1);
}