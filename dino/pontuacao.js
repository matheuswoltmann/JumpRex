
//fetch("/pontuacao/ranking").then(r => r.json()).then(dados => {
//})
let dadosRanking = [
    { posicao: 1, nome: 'João', pontuacao: 5000 },
    { posicao: 2, nome: 'Maria', pontuacao: 4000 },
    { posicao: 3, nome: 'Carlos', pontuacao: 2800 },
    // Adicione mais dados conforme necessário
];

function preencherRanking() {
    // Ordenar os dados do ranking pela pontuação (maior para menor)
    dadosRanking.sort((a, b) => b.pontuacao - a.pontuacao);

    const tabela = document.getElementById('tableBody');

    // Limpar tabela antes de preencher os dados ordenados
    tabela.innerHTML = '';

    for (let i = 0; i < dadosRanking.length; i++) {
        const row = tabela.insertRow(i);
        const cellPosicao = row.insertCell(0);
        const cellNome = row.insertCell(1);
        const cellPontuacao = row.insertCell(2);

        cellPosicao.innerHTML = dadosRanking[i].posicao;
        cellNome.innerHTML = dadosRanking[i].nome;
        cellPontuacao.innerHTML = dadosRanking[i].pontuacao;
    }
}

window.onload = function () {
    preencherRanking();
};
