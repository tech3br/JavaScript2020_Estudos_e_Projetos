const funcs = [];

for (var i = 0; i < 10; i++) {
  funcs.push(() => {
    console.log(i);
  });
}

// no caso de var nao ira imprimir o valor 2 e 8 por conta do escopo de bloco
funcs[2]();
funcs[8]();
