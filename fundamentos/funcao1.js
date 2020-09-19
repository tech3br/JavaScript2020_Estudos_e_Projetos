// FUNCAO SEM RETORNO
function imprimirSoma(a, b) {
  console.log(a + b);
}
imprimirSoma(2, 2);
imprimirSoma(2);
imprimirSoma();

//ESQUECA FORMALISMO QUE OUTRAS LINGUAGENS TEM QUANTO AOS PARAMETROS PASSADOS. O JAVASCRIPT EH BEM LIBERAL QUANTO A ISSO.

// FUNCAO COM RETORNO
function soma(a, b = 2) {
  return a + b;
}
console.log(soma(2, 3));
console.log(soma(2));
console.log(soma());
