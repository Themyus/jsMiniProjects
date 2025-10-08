const readline = require("readline-sync");

function ehPalindromo(texto) {
  let palindromo = texto.toLowerCase().replace(/[^a-z]/g, "")
  let palindromoInvertido = palindromo.split("").reverse().join("");

  if (palindromo === palindromoInvertido) {
    console.log("É palíndromo!")
  } else {
    console.log("Não é palíndromo.")
  }
}

do {
  let palavra = readline.question("Digite uma palavra ou frase: ");
  ehPalindromo(palavra);
  
  var continuar = readline.question("Quer testar outra? (s/n): ");
} while (continuar.toLowerCase() === "s");

console.log("Encerrando o programa...")
// let entrada = readline.question("Digite uma palavra: ");
// let palindromo = entrada.toLowerCase().replace(/[^a-z]/g, ""); // No replace (método que substitui uma coisa por outra), o REGEX '/[^a-z]/g' substitui qualquer caractere que não seja letra por nada. Basicamente remove.
// let palindromoInvertido = palindromo.split("").reverse().join("");
// if (palindromo === palindromoInvertido) {
//   console.log(
//     `Sua palavra invertida é: ${palindromoInvertido}. Ou seja, é palíndromo!`
//   );
// } else {
//   console.log(
//     `Sua palavra invertida é: ${palindromoInvertido}. Ou seja, não é palíndromo.`
//   );
// }
