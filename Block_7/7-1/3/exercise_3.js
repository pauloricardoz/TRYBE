const botao = document.getElementById('click-me');
const contador = document.getElementsByTagName('p')[0];
botao.addEventListener('click', function () {
  contador.innerHTML = parseInt(contador.innerHTML) + 1;
});
