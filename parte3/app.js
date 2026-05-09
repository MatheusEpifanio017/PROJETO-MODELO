
const clientes = require('./clientes');

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

console.table(listaClientes);