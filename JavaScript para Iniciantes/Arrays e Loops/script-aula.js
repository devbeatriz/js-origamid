// Array - é um grupo de valores geralmente relacionados. Servem para guardarmos diferentes valores em uma única variável.
var videoGames = ['Switch', 'PS4', 'XBOX'];

// For loop - Fazem algo repetidamente até que uma condição seja atingida.
// O for loop possui 3 parte, início, condiçãoo e incremento.
for (var numero = 0; numero <= 10; numero++) {
  console.log(numero);
}

// While
var i = 0;
while (i <= 10) {
  console.log(i);
  i = i + 5;
}

// Break
var videoGames = ['Switch', 'PS4', 'XBOX', '3DS'];

for(var item = 0; item < videoGames.length; item++) {
  console.log(videoGames[item]);
  if(videoGames[item] === 'PS4') {
    break;
  }
}

// forEach - forEach é um método que executa uma função para cada item da array. É uma forma mais simples de utilizarmos um loop com arrays(ou array-like)
var frutas = ['Banana', 'Pera', 'Maçã', 'Abacaxi', 'Uva'];

frutas.forEach(function(fruta, index) {
  frutas.pop();
  console.log(fruta, index, frutas)
});

var numero = 0;
var maximo = 50;
for(;numero < maximo;) {
  console.log(numero);
  numero++;
}
