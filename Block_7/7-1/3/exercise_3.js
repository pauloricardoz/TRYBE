const botao = document.getElementById('click-me');
const contador = document.getElementsByTagName('p')[0];
let clickCount = parseInt(contador.innerHTML);
botao.addEventListener('click', function () {
  contador.innerHTML = clickCount++;
});
