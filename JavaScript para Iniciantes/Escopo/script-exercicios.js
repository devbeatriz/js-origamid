// Por qual motivo o código abaixo retorna com erros?
{
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;
}
console.log(var, marca, portas); // R: variável cor não está sendo puxada e console fora do escopo de bloco, const e let não vazam

// Como corrigir o erro abaixo?
function somarDois(x) {
  const dois = 2; // R: const dois declarada dentro da função
  return x + dois;
}
function dividirDois(x) {
  return x + dois; 
}
somarDois(4);
dividirDois(6);

// O que fazer para total retornar 500?
var numero = 50;

for(var numero = 0; numero < 10; numero++) { // R: var precisa ser trocado para let
  console.log(numero);
}

const total = 10 * numero;
console.log(total);
