const display = document.querySelector("#display");
let valor1 = "";
let valor2 = "";
let operacao = "";

// Botões de número
document.querySelectorAll(".numero").forEach((botao) => {
  botao.addEventListener("click", () => {
    display.value += botao.textContent;
  });
});

// Botões de operação
document.querySelectorAll(".operacao").forEach((botao) => {
  botao.addEventListener("click", () => {
    valor1 = display.value;
    operacao = botao.textContent;
    display.value = "";
  });
});

// Funções das operações
const subtracao = () => {
  return Number(valor1) - Number(valor2);
};
const soma = () => {
  return Number(valor1) + Number(valor2);
};
const multiplicacao = () => {
  return Number(valor1) * Number(valor2);
};
const divisao = () => {
  return Number(valor1) / Number(valor2);
};

// Botão de igual
document.querySelector("#igual").addEventListener("click", () => {
  valor2 = display.value;
  if (operacao === "-") {
    display.value = subtracao();
  } else if (operacao === "+") {
    display.value = soma();
  } else if (operacao === "x") {
    display.value = multiplicacao();
  } else if (operacao === ":") {
    display.value = divisao();
  }
});

// Botão de limpar
document.querySelector("#limpar").addEventListener("click", () => {
  valor1 = "";
  valor2 = "";
  operacao = "";
  display.value = "";
});
