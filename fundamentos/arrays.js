const nValores = [7.7, 8.9, 6.3, 9.2];
console.log(nValores[0], nValores[3]);

// inserindo novos elementos diretamente
nValores[4] = 10;
console.log(nValores);

// nao retorna um erro em JS, retorna undefined. porem isto para um programa em producao podera ter prejuizos.
console.log(nValores[5]);

// temos algumas funcoes para arrays. ex.:
// lenght que calcula o tamanho array
console.log(nValores.length);

// push que insere dados na lista
console.log(nValores.push({ id: 3 }, false, null, 'teste'));
console.log(nValores);

// obtem o ultimo elemento do array
console.log(nValores.pop());
delete nValores[0]
console.log(nValores);
