// Armazenando funcao dentro de variavel ou constante
const imprimirSoma = function (a, b) {
  console.log(a + b);
};
imprimirSoma(2, 3);

// Armazenando uma funcao Arrow em uma variavel
const soma = (a, b) => {
  return a + b;
};
console.log(soma(5, 5));

// Retorno implicito
const subtracao = (a, b) => a - b;
console.log(subtracao(20, 5));
