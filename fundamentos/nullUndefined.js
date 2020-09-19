let valor // Nao inicializada 
console.log(valor)

valor = null // Ausencia de Valor, ou seja nao aponta pra nenhum local na memoria
console.log(valor)

// sempre usar nulo caso queira zerar o valor de uma variavel e EVITAR o undefined
// console.log(valor.toString())
// Ira disparar um erro
// TypeError: Cannot read property 'toString' of null

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

