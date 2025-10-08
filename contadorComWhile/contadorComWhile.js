let numero = prompt("Digite um número:");
numero = Number(numero);

index = 0;
while (index < numero) {
  console.log(`O número ${index} é menor que ${numero}`);
  index++;
}

index = numero;
while (index >= 0) {
  console.log(index);
  if (index % 3 === 0) {
    console.log(`O número ${index} é múltiplo de 3`);
  }
  index--;
}
console.log("Fim da contagem!");
