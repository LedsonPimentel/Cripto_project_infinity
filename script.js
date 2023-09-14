function redirecionarParaOutraPagina(url) {
    window.location.href = url;
}

// Função para realizar a pesquisa
function realizarPesquisa() {
    const termoPesquisa = document.getElementById('barraPesquisa').value.toLowerCase();
    const linhas = document.querySelectorAll('tbody tr');

    linhas.forEach(function(linha) {
        const nomeMoeda = linha.querySelector('td:nth-child(2)').textContent.toLowerCase();

        if (nomeMoeda.includes(termoPesquisa)) {
            linha.style.display = '';
        } else {
            linha.style.display = 'none';
        }
    });
}

// Associe a função de pesquisa ao evento de clique do botão
document.getElementById('botao-pesquisar').addEventListener('click', realizarPesquisa);



function atualizarValorBitcoin() {
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=brl')
        .then(response => response.json())
        .then(data => {
            const bitcoinPrice = data.bitcoin.brl;
            document.getElementById('bitcoinPrice').textContent = `${bitcoinPrice.toFixed(2)} BRL`;
        })
        .catch(error => {
            console.error('Erro ao buscar preço do Bitcoin:', error);
        });
}

function atualizarValorEthereum() {
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=brl')
        .then(response => response.json())
        .then(data => {
            const ethereumPrice = data.ethereum.brl;
            document.getElementById('ethereumPrice').textContent = `${ethereumPrice.toFixed(2)} BRL`;
        })
        .catch(error => {
            console.error('Erro ao buscar preço do Ethereum:', error);
        });
}

function atualizarValorDogecoin() {
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=dogecoin&vs_currencies=brl')
        .then(response => response.json())
        .then(data => {
            const dogecoinPrice = data.dogecoin.brl;
            document.getElementById('dogecoinPrice').textContent = `${dogecoinPrice.toFixed(2)} BRL`;
        })
        .catch(error => {
            console.error('Erro ao buscar preço do Dogecoin:', error);
        });
}

// Atualiza o valor em tempo real a cada 60 segundos (ou conforme necessário)
setInterval(atualizarValorBitcoin, 60000);
setInterval(atualizarValorEthereum, 60000);
setInterval(atualizarValorDogecoin, 60000);

// Chama as funções inicialmente para exibir os valores imediatamente
atualizarValorBitcoin();
atualizarValorEthereum();
atualizarValorDogecoin();

function converterBitcoinParaReal() {
    const bitcoinAmount = document.getElementById('bitcoinAmount').value;
    if (isNaN(bitcoinAmount) || bitcoinAmount <= 0) {
        alert('Por favor, insira uma quantidade válida de Bitcoin.');
        return;
    }

    fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=brl')
        .then(response => response.json())
        .then(data => {
            const bitcoinPrice = data.bitcoin.brl;
            const valorConvertido = bitcoinAmount * bitcoinPrice;
            document.getElementById('valorConvertido').textContent = `Valor em Reais (BRL): ${valorConvertido.toFixed(2)} BRL`;
        })
        .catch(error => {
            console.error('Erro ao buscar preço do Bitcoin:', error);
        });
}


function converterEthereumParaReal() {
    const ethereumAmount = parseFloat(document.getElementById('ethereumAmount').value);
    
    if (isNaN(ethereumAmount) || ethereumAmount <= 0) {
        alert('Por favor, insira uma quantidade válida de Ethereum.');
        return;
    }

    fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=brl')
        .then(response => response.json())
        .then(data => {
            const ethereumPrice = data.ethereum.brl;
            const valorConvertido = ethereumAmount * ethereumPrice;
            document.getElementById('valorConvertido').textContent = `Valor em Reais (BRL): ${valorConvertido.toFixed(2)} BRL`;
        })
        .catch(error => {
            console.error('Erro ao buscar preço do Ethereum:', error);
        });
}


function converterDogecoinParaReal() {
    const dogecoinAmount = document.getElementById('dogecoinAmount').value;
    if (isNaN(dogecoinAmount) || dogecoinAmount <= 0) {
        alert('Por favor, insira uma quantidade válida de Dogecoin.');
        return;
    }

    fetch('https://api.coingecko.com/api/v3/simple/price?ids=dogecoin&vs_currencies=brl')
        .then(response => response.json())
        .then(data => {
            const dogecoinPrice = data.dogecoin.brl;
            const valorConvertido = dogecoinAmount * dogecoinPrice;
            document.getElementById('valorConvertido').textContent = `Valor em Reais (BRL): ${valorConvertido.toFixed(2)} BRL`;
        })
        .catch(error => {
            console.error('Erro ao buscar preço do Dogecoin:', error);
        });
}
