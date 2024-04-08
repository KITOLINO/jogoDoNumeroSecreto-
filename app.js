//let titulo = document.querySelector('h1');
//titulo.innerHTML = "Jogo do Número Secreto";

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = "Escolha um número entre 1 e 10";
let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female', { rate: 1.2 });
}

exibirTextoNaTela('h1', "Jogo do chute");
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');


function verificarChute() {
  let chute = document.querySelector('input').value;
  if (chute == numeroSecreto) {
    exibirTextoNaTela('h1', " ACERTOU CACHORRO DO MANGUE!!!");
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

    exibirTextoNaTela('p', `Você descobriu o número secreto com  ${tentativas} ${palavraTentativa}`);
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela('p', 'o número secreto é menor');
    } else {
      exibirTextoNaTela('p', 'o número secreto é maior');
    }
    tentativas++;
    limparCampo();
  }

}
function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

  if (quantidadeDeElementosNaLista == numeroLimite) {
    listaDeNumerosSorteados = [];
  }
  if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
  }
}


function limparCampo() {
  chute = document.querySelector('input');
  chute.value = '';
}

document.getElementById('reiniciar').removeAttribute('disabled');

//alert(numeroSecreto);

function reiniciarJogo() {
  numeroSecreto = 5;
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled', true)
}
function exibirMensagemInicial() {
  exibirTextoNaTela('h1', "Jogo do chute");
  exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}
