// Retorne o url da página atual utilizando o objeto window
const atualPagina = window.location.href;
console.log(atualPagina);

// Seleciona o primeiro elemento da página que
// possua a classe ativo
const primeiroAtivo = document.querySelector('.ativo');

// Retorne a linguagem do navegador
const linguagem = window.navigator.language;
console.log(linguagem);

// Retorne a largura da janela 
const width = window.innerWidth;
console.log(width);