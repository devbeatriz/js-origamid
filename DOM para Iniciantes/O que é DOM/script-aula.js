// DOCUMENT OBJECT MODEL (DOM) - É uma interface que representa documentos HTML e XML através de objetos. Com ela é possível manipular a estrutura, estilo e conteúdo destes documentos.

// window.alert('Isso mesmo');

const href = window.location.href;

console.log(href);

if(href === 'http://127.0.0.1:5500/o-que-e-o-doms/') {
  console.log('É igual');
}

const h1Selecionado = document.querySelector('h1');
const h1Classes = h1Selecionado.classList;

function teste() {
  console.log('Clicou em ', h1Selecionado.innerText);
}

h1Selecionado.addEventListener('click', teste);