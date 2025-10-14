do {
  const a = Number(prompt("Digite um número: "));
  const b = Number(prompt("Digite outro número: "));

  function soma() {
    return a + b;
  }
  function subtracao() {
    return a - b;
  }
  function multiplicacao() {
    return a * b;
  }
  function divisao() {
    return a / b;
  }

  let operacao = prompt(
    "Digite a operação que deseja efetuar entre os dois números (+/-/x/:) (0 para cancelar): "
  );

  switch (operacao) {
    case "+":
      console.log("O resultado é: ", soma());
      break;
    case "-":
      console.log("O resultado é: ", subtracao());
      break;
    case "x":
      console.log("O resultado é: ", multiplicacao());
      break;
    case ":":
      console.log("O resultado é: ", divisao());
      break;
    case "0":
      console.log("Cancelando operação...");
      break;
    default:
      console.log("Valor inválido! Digite +, -, x, :, ou 0 para encerrar: ");
  }
  continuar = prompt("Deseja continuar? (s/n): ");
} while (continuar.toLowerCase() == "s");
