const financeiro = require('./financeiro');
const clientes = require('./clientes')


function imprimirCupom (cliente, valorFinal) {
    

    console.log("LOJA MODA SENAC");
    console.log("Cliente: ", cliente);
    console.log("Totala a Pagar:", valorFinal);
}

const valorFinal = financeiro.calcularTotalComDesconto(300, 15);

const cliente1 = clientes.criarCliente(
    "Matheus Epifanio",
    "matheus@gmail.com",
    "VIP",
);

const cliente2 = clientes.criarCliente(
    "Kyara Krumenauer",
    "kyara@gmail.com",
    "COMUM"
)
clientes.cadastrarCliente(cliente1);
clientes.cadastrarCliente(cliente2);

const listaClientes = clientes.listarClientes ();

for (let cliente of listaClientes) {
  imprimirCupom(cliente.nome, valorFinal);
}
