// peso das provas
const peso1 = 1.0;
const peso2 = Number('2.0');
console.log(peso1, peso2);

// para saber se eh um inteiro
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

// calculando media do semestre de acordo com avaliacao
const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

// calculando total 
const total = avaliacao1 * peso1 + avaliacao2 * peso2;
// calculando media
const media = total / (peso1 + peso2);

console.log(media.toFixed(1)) // converte para um numero inteiro com duas casas decimais
console.log(media.toString(2)) // converte em binario

// mostrar o tipo dos dados
console.log(typeof media)

// mostrando que Number com maiusculo eh uma funcao
console.log(typeof Number)
