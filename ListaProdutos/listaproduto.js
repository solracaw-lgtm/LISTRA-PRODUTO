const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let lista = [];

function adicionarItem(item) {
  lista.push(item);
  console.log(`"${item}" foi adicionado à lista.`);
}

function removerItem(item) {
  const index = lista.indexOf(item);
  if (index !== -1) {
    lista.splice(index, 1);
    console.log(`"${item}" foi removido da lista.`);
  } else {
    console.log(`O item "${item}" não está na lista.`);
  }
}

function listarItens() {
  if (lista.length === 0) {
    console.log("A lista está vazia.");
  } else {
    console.log("Itens na lista:");
    for (const item of lista) {
      console.log(`- ${item}`);
    }
  }
}

function mostrarMenu() {
  console.log(`
Escolha uma opção:
1. Adicionar item
2. Remover item
3. Listar itens
4. Sair
  `);
}

function perguntarOpcao() {
  mostrarMenu();
  rl.question("Digite o número da opção desejada: ", (opcao) => {
    switch(opcao.trim()) {
      case '1':
        rl.question("Digite o nome do item para adicionar: ", (item) => {
          adicionarItem(item.trim());
          perguntarOpcao();
        });
        break;
      case '2':
        rl.question("Digite o nome do item para remover: ", (item) => {
          removerItem(item.trim());
          perguntarOpcao();
        });
        break;
      case '3':
        listarItens();
        perguntarOpcao();
        break;
      case '4':
        console.log("Encerrando o programa. Até mais!");
        rl.close();
        break;
      default:
        console.log("Opção inválida. Tente novamente.");
        perguntarOpcao();
        break;
    }
  });
}

// Inicia o programa
console.log("=== Sistema de Lista de Compras ===");
perguntarOpcao();
