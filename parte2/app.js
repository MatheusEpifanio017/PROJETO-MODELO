const financeiro = require('./financeiro');
const clientes = require('./clientes')


function imprimirCupom (cliente, valorFinal) {
    

    console.log("LOJA MODA SENAC");
    console.log("Cliente: ", cliente);
    console.log("Totala a Pagar:", valorFinal);
}

const cliente1 = clientes.criarCliente(
    "Matheus",
    "matheus@gmail.com",
    "VIP",
);
clientes.cadastrarCliente(cliente1)


const valorFinal = financeiro.calcularTotalComDesconto(300, 15);

imprimirCupom(cliente1.nome, valorFinal);

