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