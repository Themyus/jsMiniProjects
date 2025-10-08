const readline = require("readline-sync");

function soma(a, b) {
  return a + b;
}
function subtracao(c, d) {
  return c - d;
}
function multiplicacao(e, f) {
  return e * f;
}
function divisao(g, h) {
  return g / h;
}

do {
  operacao = readline.question(
    "Digite a operação que deseja efetuar (+, -, x, :) ou 'sair' para encerrar: "
  );

  if (operacao === "+") {
    let a = Number(readline.question("Digite o valor A: "));
    let b = Number(readline.question("Digite o valor B: "));
    console.log("A soma de A e B é", soma(a, b));
  } else if (operacao === "-") {
    let c = Number(readline.question("Digite o valor C: "));
    let d = Number(readline.question("Digite o valor D: "));
    console.log("A subtração de C e D é", subtracao(c, d));
  } else if (operacao === "x") {
    let e = Number(readline.question("Digite o valor E: "));
    let f = Number(readline.question("Digite o valor F: "));
    console.log("A multiplicação de E e F é", multiplicacao(e, f));
  } else if (operacao === ":") {
    let g = Number(readline.question("Digite o valor G: "));
    let h = Number(readline.question("Digite o valor H: "));
    console.log("A divisão de G e H é", divisao(g, h));
  } else if (operacao === "sair") {
    console.log("Encerrando calculadora...");
    break;
  } else {
    console.log("Digite uma operação válida");
    continue;
  }
} while (true);
