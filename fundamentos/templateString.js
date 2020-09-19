const nome = "Daniel"

// metodo ruim e verboso
const concatenacao = "Ola" + nome + "!"
console.log(concatenacao)

// metodo bom e limpo - template string
const template = `Ola ${nome}!`
console.log(template)

// expressoes 
console.log(`1 + 1 = ${1 + 1}`);

const upCase = texto => texto.toUpperCase()
console.log(`Ei... ${upCase("cuidado com o degrau")}`)

