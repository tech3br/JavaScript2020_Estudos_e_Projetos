// UM OBJETO NAO EH A MESMA COISA QUE UM JSON

// Um par de chaves representa um objeto
const prod1 = {};
console.log(typeof prod1);
prod1.nome = 'Celular Ultra Mega';
console.log(prod1);

// Um objeto eh um conjunto de chave/valor. valores este que podem ser numero, texto, etc

prod1.preco = 4998.9;
console.log(prod1);

// Evitar atributos com espaco num objecto (chaves com nomes com espaco)

// Outro exemplo de um objeto com outro objeto
const prod2 = {
  nome: 'Camisa Polo',
  valor: 79.9,
  estampas: {
    lisa: true,
    desenhada: false,
  },
  gola: false,
  botoes: 2,
};
console.log(prod2);

// JSON EH UM FORMATO TEXTUAL !== DE OBJETO
