const financeiro = require('./financeiro');
console.log(financeiro)

function imprimirCupom (cliente, valorFinal) {
    

    console.log("LOJA MODA SENAC");
    console.log("Cliente: ", cliente);
    console.log("Totala a Pagar:", valorFinal);
}

const valorVenda = 200;
const percentual = 10;

financeiro.calcularTotalComDesconto(200, 10);

imprimirCupom("Matheus", 100);