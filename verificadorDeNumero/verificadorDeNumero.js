let idade = prompt("Digite sua idade:");
idade = Number(idade);

if (idade < 0) {
  console.log("Tu nem nasceu ainda");
} else if (idade > 0) {
  console.log(`Tu tem ${idade} anos`);
} else {
  console.log(`Tu com ${idade} anos acabou de nascer`);
}

index = 0;
while (index < idade) {
  console.log(`O index é menor que sua idade de ${idade} anos`);
  index++;
}

if (idade !== 0) {
  if (idade % 2 === 0) {
    console.log(`A sua idade de ${idade} é par`);
  } else {
    console.log(`A sua idade de ${idade} é ímpar`);
  }
}
