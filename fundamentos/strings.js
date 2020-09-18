const escola = 'Tech3br';

// onde o caractere esta
console.log(escola.charAt(4));
console.log(escola.charAt(8));
console.log(escola.charCodeAt(3));

// em que indice o caracter esta
console.log(escola.indexOf('T'));

// a partir do indice 1
console.log(escola.substring(1));

// va do indice 0 e ate o indice 3 sem incluir o indice final
console.log(escola.substring(0, 3));

// concatenar
console.log('Escola '.concat(escola).concat('!'));

// funcao para fazer um replace
console.log(escola.replace(escola, 'novo texto'));

// transformando texto em array
console.log('Ana,Maria,Pedro'.split(','));

let n = 'Ana,Carlos,Sergio';
const nArray = n.split(',');
console.log(nArray);

const result = nArray.map((item) => item);
console.log(result.includes("Carlos"));
