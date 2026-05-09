const fs = require('fs');

function lerArquivo(caminho) {}

function salvarArquivo(nomeArquivo, dados) {
    const stringData = JSON.stringify(dados);
    const caminho = __dirname + '/dados/' + nomeArquivo + '.json';
     fs.writeFileSync(caminho, stringData);
}

module.exports = {lerArquivo, salvarArquivo};