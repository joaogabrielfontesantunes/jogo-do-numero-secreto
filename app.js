    let listaDeNumerosSorteados = [];
    let numeroSecreto = gerarNumeroAleatorio();
    let tentativas = 0;

function iniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 0;
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número de 1 a 10');
    limparCampo();
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * 10 + 1);
    let tamanhoDaLista = listaDeNumerosSorteados.length;
    if (tamanhoDaLista == 10) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function errou(texto) {
    exibirTextoNaTela('h1', 'Você errou!');
    exibirTextoNaTela('p', texto);
    limparCampo();
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function verificarChute() {
    tentativas++;
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Você acertou!');
        exibirTextoNaTela('p', `O número secreto foi descoberto com ${tentativas} ${palavraTentativa}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if (chute > numeroSecreto) {
        errou(`O número secreto é menor que ${chute}`);
    } else if (chute < numeroSecreto) {
        errou(`O número secreto é maior que ${chute}`);
}
}

iniciarJogo();
