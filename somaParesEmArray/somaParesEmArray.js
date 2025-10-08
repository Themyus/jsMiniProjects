let entrada = prompt("Digite números no modelo (1, 2, 3, 4, 5)");
numeros = entrada.split(",");
numeros = numeros.map((n) => Number(n));

let pares = numeros.filter((n) => n % 2 === 0);
let somaPares = pares.reduce(
  (acumulator, valorAtual) => acumulator + valorAtual,
  0
);
somaNumeros = numeros.reduce(
  (acumulator, valorAtual) => acumulator + valorAtual,
  0
);

media = somaNumeros / numeros.length;
menorValor = Math.min(...numeros); // O math.min ou .max pega o maior ou menor valor de uma lista de valores
maiorValor = Math.max(...numeros); // O ... desempacota um array em uma lista de valores

console.log("A média dos números é:", media);
console.log("Os números pares são:", pares);
console.log("A soma dos pares resulta em:", somaPares);
console.log("O maior valor é:", maiorValor);
console.log("O menor valor é:", menorValor);
