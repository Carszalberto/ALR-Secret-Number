let listaDeNumerosSorteados = [];
let numeroLimite;
perguntarLimite()
function perguntarLimite() {
    numeroLimite = prompt("Qual limite você quer definir para essa rodada?");
}
    let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirMensagemInicial()

function verificarChute() {
    let chute = (document.querySelector('input').value);

    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Parabéns, você descobriu o numero secreto com ${tentativas} ${palavraTentativa}.`
        exibirTextoNaTela('p', mensagemTentativas);
        habilitarReiniciar();
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor.');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior.');
        }
        tentativas++;
        limparCampo();
    }
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', `Escolha um número de 1 a ${numeroLimite}`);
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    perguntarLimite();
    exibirMensagemInicial();
    desabilitarReiniciar();
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if (quantidadeDeElementosNaLista == 3) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido)
        return numeroEscolhido
    }
}

function desabilitarReiniciar() {
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function habilitarReiniciar() {
    document.getElementById('reiniciar').removeAttribute('disabled');
}

//Método ensinado anteriormente de citar a tag e definir o texto pra ela:
//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número secreto';