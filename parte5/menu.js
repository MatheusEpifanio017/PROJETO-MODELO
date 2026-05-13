// menu.js
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function criarMenu(titulo, opcoes) {
    console.log(`\n==============================`);
    console.log(`    ${titulo.toUpperCase()}    `);
    console.log(`==============================`);
    
    opcoes.forEach((opt, index) => {
        console.log(`${index + 1}, ${opt.texto}`);
    });
    console.log(`0. Sair`);
    console.log(`==============================`);

    rl.question("Escolha uma opção: ", (escolha) => {
        if (escolha === '0') {
            console.log("Encerrando sistema...");
            rl.close();
            return;
        }

        // Pegamos o índice do array (se digitou 1, o índice no Array é 0)
        const indice = parseInt(escolha) - 1;
        const opcaoSelecionada = opcoes[indice];

        // Verifica se a opção existe e se tem uma função de ação atrelada a ela
        if (opcaoSelecionada && typeof opcaoSelecionada.acao === 'function') {
            // Executa a ação lá do app.js e passa uma função para retornar ao menu quando terminar (RECURSIVIDADE!)
            opcaoSelecionada.acao(rl, () => criarMenu(titulo, opcoes));
        } else {
            console.log("⚠️ Opção inválida!");
            criarMenu(titulo, opcoes); // Chama o menu de novo se errar
        }
    });

}

module.exports = { criarMenu };