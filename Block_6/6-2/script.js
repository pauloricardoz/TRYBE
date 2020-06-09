const stateList = [
  ['Acre', 'AC'],
  ['Alagoas', 'AL'],
  ['Amapá', 'AP'],
  ['Amazonas', 'AM'],
  ['Bahia', 'BA'],
  ['Ceará', 'CE'],
  ['Distrito Federal', 'DF'],
  ['Espírito Santo', 'ES'],
  ['Goiás', 'GO'],
  ['Maranhão', 'MA'],
  ['Mato Grosso', 'MT'],
  ['Mato Grosso do Sul', 'MS'],
  ['Minas Gerais', 'MG'],
  ['Pará', 'PA'],
  ['Paraíba', 'PB'],
  ['Paraná', 'PR'],
  ['Pernambuco', 'PE'],
  ['Piauí', 'PI'],
  ['Rio de Janeiro', 'RJ'],
  ['Rio Grande do Norte', 'RN'],
  ['Rio Grande do Sul', 'RS'],
  ['Rondônia', 'RO'],
  ['Roraima', 'RR'],
  ['Santa Catarina', 'SC'],
  ['São Paulo', 'SP'],
  ['Sergipe', 'SE'],
  ['Tocantins', 'TO'],
];
const data = document.getElementById('dataEntrada');
data.addEventListener('change', function () {
  lat tudo="";
  if (data.value.length < 10) {
    alert('Formato invalido! Ano deve ser colocado dd/mm/aaaa');
  }
  let dataQuebrada = data.value.split('/');
  if (dataQuebrada[0] > 31 || dataQuebrada[0] < 1) {
    alert('Dia invalido! Dia deve ser entre 1 e 31');
    return;
  }
  if (dataQuebrada[1] > 12 || dataQuebrada[1] < 1) {
    alert('Mes invalido! Mes deve ser entre 1 e 31');
    return;
  }
  if (dataQuebrada[2] < 0) {
    alert('Ano invalido! Ano deve ser positivo');
    return;
  }
});
const estados = document.getElementById('fEstado');
for (let num = 0; num < stateList.length; num++) {
  let estado = document.createElement('option');
  estado.innerText = stateList[num];
  estados.appendChild(estado);
}
let botaoSubmit = document.getElementById('bSubmit');
console.log(botaoSubmit);
botaoSubmit.addEventListener('click', teste);
function teste() {
  const inputs = document.getElementsByTagName('input');
  event.preventDefault();
  console.log(inputs);
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value == '') {
      alert('prevent');
      event.preventDefault();
    }
  }
  const div = document.createElement('div');
  if (document.getElementsByTagName('div').length == 0) {
    document.body.appendChild(div);
  } else {
    document.getElementsByTagName('div')[0].innerHTML = '';
  }
  for (let i = 0; i < inputs.length; i++) {
    let entrada = document.createElement('p');
    entrada.innerHTML = inputs[i].value;
    document.getElementsByTagName('div')[0].appendChild(entrada);
  }
}
let subtido = document.getElementById('myForm');
subtido.onsubmit = function () {
  event.preventDefault();
  const inputs = document.getElementsByTagName('input');
  console.log(inputs);
  const div = document.createElement('div');
  if (document.getElementsByTagName('div').length == 0) {
    document.body.appendChild(div);
  } else {
    document.getElementsByTagName('div')[0].innerHTML = '';
  }
  for (let i = 0; i < inputs.length; i++) {
    let entrada = document.createElement('p');
    entrada.innerHTML = inputs[i].value;
    document.getElementsByTagName('div')[0].appendChild(entrada);
  }
  localStorage.setItem('teste', div.innerText);
  alert('aqui');
};
let botaoLimpar = document.getElementById('limpar');
botaoLimpar.addEventListener('click', function () {
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value == '';
  }
});
