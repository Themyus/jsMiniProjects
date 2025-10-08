const readline = require("readline-sync");

let tarefas = [
  { descricao: "Estudar JavaScript", concluida: true },
  { descricao: "Ler o Tratado de Santo Afonso", concluida: false },
  { descricao: "Conhecer os clássicos dos filmes", concluida: false },
  { descricao: "Ser B2/C1 em inglês", concluida: false },
  {
    descricao: "Conhecer bem a doutrina da Igreja e sua história conciliar",
    concluida: false,
  },
];

do {
  menu = Number(
    readline.question(
      "Digite o número de uma das opções: \n" +
        "1 - Adicionar tarefa \n" +
        "2 - Remover tarefa \n" +
        "3 - Listar tarefas \n" +
        "4 - Mudar status de tarefa \n" +
        "5 - Sair \n\n"
    )
  );

  if (menu === 1) {
    let novaTarefa = {
      descricao: readline.question(
        "Qual tarefa deseja adicionar? Digite 0 para voltar ao menu: "
      ),
      concluida: false,
    };
    if (novaTarefa.descricao === "0") {
      console.log("Voltando ao menu...\n");
      continue;
    }
    tarefas.push(novaTarefa);
    console.log(
      `A tarefa: ${novaTarefa.descricao} foi adicionada com sucesso! \n`
    );
  } else if (menu === 2) {
    let tarefaRemovida = Number(
      readline.question(
        "Qual tarefa deseja remover? Digite 0 para voltar ao menu: "
      )
    );
    if (tarefaRemovida === 0) {
      console.log("Voltando ao menu...\n");
      continue;
    }
    let indice = tarefaRemovida - 1;
    if (indice >= 0 && indice < tarefas.length) {
      console.log(
        `A tarefa "${tarefas[indice].descricao}" foi removida com sucesso! \n`
      );
      tarefas.splice(indice, 1);
    } else {
      console.log("Número inválido! Nenhuma tarefa removida. \n");
    }
  } else if (menu === 3) {
    console.log("");
    tarefas.forEach((tarefa, index) => {
      console.log(
        `${index + 1}. ${tarefa.descricao} - Concluída: ${tarefa.concluida}\n`
      );
    });
  } else if (menu === 4) {
    let tarefaCompletada = Number(
      readline.question(
        "Qual tarefa você deseja mudar o status? Digite 0 para voltar ao menu: "
      )
    );
    if (tarefaCompletada === 0) {
      console.log("Voltando ao menu...\n");
      continue;
    }
    let indice = tarefaCompletada - 1;
    if (indice >= 0 && indice < tarefas.length) {
      tarefas[indice].concluida = !tarefas[indice].concluida;
      console.log("Status de tarefa alterado com sucesso!\n");
    } else {
      console.log("Número inválido! Nenhuma tarefa alterada.\n");
    }
  } else if (menu === 5) {
    break;
  } else {
    console.log("\nDigite 1, 2, 3, 4 ou 5\n");
  }
} while (true);

console.log("Programa encerrado!");
console.log(tarefas);
