const fs = require('fs');

function lerArquivo(nomeArquivo) {
    const caminho = __dirname + '/dados/' + nomeArquivo + '.json';
    if (!fs.existsSync(caminho)) {
    return[];
    }

    const conteudo = fs.readFileSync(caminho, 'utf-8');
    
    return JSON.parse(conteudo || "[]");
}

function salvarArquivo(nomeArquivo, dados) {
    const stringData = JSON.stringify(dados, null, 2);
    const caminho = __dirname + '/dados/' + nomeArquivo + '.json';
     fs.writeFileSync(caminho, stringData);
}

module.exports = {lerArquivo, salvarArquivo};