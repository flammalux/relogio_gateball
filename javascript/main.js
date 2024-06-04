const relogioGateball = document.querySelector('#relogio');
const temporizador = document.querySelector('#contador-regressivo');
const numeroDeJogadores = 10;
const jogadores = new Array();

let tempoDaPartida = 1;

// window.customElements.define('elemento-contador', ContadorRegressivo);
const contador = new ContadorRegressivo(tempoDaPartida);

// const mutationObserver = new MutationObserver ((alteracoes) => {
//     console.log(alteracoes);
// });

// mutationObserver.observe(contador, { attributes: true, subtree: true })

temporizador.innerHTML = `${tempoDaPartida}:00`;

temporizador.addEventListener('click', () => {
    temporizador.classList.toggle('ativo');
    
    if (temporizador.classList.contains('ativo')) {
        contador.IniciaContagem()
        
        if (contador.fim == true) {
            contador.ResetaContagem();
            temporizador.classList.toggle('ativo');
        }
    }else {
        contador.PausaContagem();
    }
});


for (let i = 1; i <= numeroDeJogadores; i++) {
    //este laço cria os jogadores e as divs desses jogadores
    
    let idJogador = 'jogador-' + i;
    let jogador = new Jogador(idJogador, i);

    jogadores.push(jogador);
    
    let divJogador = document.createElement('div');
    divJogador.setAttribute('id', idJogador);
    
    let classeTime = 'time-vermelho_jogador';

    let spanNumeroJogador = document.createElement('span');
    spanNumeroJogador.setAttribute('class', 'jogador_numero');
    spanNumeroJogador.innerHTML = i;

    let divPontuacaoJogador = document.createElement('div');
    divPontuacaoJogador.setAttribute('class', 'jogador_pontuacao');
    divPontuacaoJogador.innerHTML = '0';

    let divAvancoJogadorWrapper = document.createElement('div');
    divAvancoJogadorWrapper.setAttribute('class', 'jogador_avanco-wrapper');

    for (let i = 0; i < 4; i++) {
        let divAvancoJogador = document.createElement('div');
        divAvancoJogador.setAttribute('class', 'jogador_avanco');
        divAvancoJogador.innerHTML = '<svg><circle cx="3" cy="3" r="2.5"/></svg>';
        
        divAvancoJogadorWrapper.appendChild(divAvancoJogador);
    }

    let divBotoesJogador = document.createElement('div');
    divBotoesJogador.setAttribute('class', 'jogador_botoes');

    let btnAumentaPontuacao = document.createElement('button');
    btnAumentaPontuacao.setAttribute('class', 'aumenta_pontuacao');
    btnAumentaPontuacao.innerHTML = '+';

    let btnDiminuiPontuacao = document.createElement('button');
    btnDiminuiPontuacao.setAttribute('class', 'diminui_pontuacao');
    btnDiminuiPontuacao.innerHTML = '-';
    
    btnAumentaPontuacao.addEventListener('click', () => {
        GanhaPontuacao(jogadores[(i-1)]);
    });

    btnDiminuiPontuacao.addEventListener('click', () => {
        PerdePontuacao(jogadores[(i-1)]);
    });
    
    divBotoesJogador.appendChild(btnAumentaPontuacao);
    divBotoesJogador.appendChild(btnDiminuiPontuacao);
    
    let btnEstadoJogador = document.createElement('button');
    btnEstadoJogador.setAttribute('class', 'jogador_estado');
    btnEstadoJogador.innerHTML = 'out';

    btnEstadoJogador.addEventListener('click', () => {
        jogadores[i].situacao = !jogadores[i].situacao;

        if (jogadores[i].situacao == false) {
            btnEstadoJogador.classList.add('jogador-fora');
        } else {
            btnEstadoJogador.classList.remove('jogador-fora');
        }
    });

    if (i%2 ==0) {
        classeTime = 'time-branco_jogador';
        divJogador.setAttribute('class', classeTime);

        divJogador.appendChild(btnEstadoJogador);
        divJogador.appendChild(divPontuacaoJogador);
        divJogador.appendChild(divAvancoJogadorWrapper);
        divJogador.appendChild(divBotoesJogador);
        divJogador.appendChild(spanNumeroJogador);
    } else {
        divJogador.setAttribute('class', classeTime);

        divJogador.appendChild(spanNumeroJogador);
        divJogador.appendChild(divPontuacaoJogador);
        divJogador.appendChild(divAvancoJogadorWrapper);
        divJogador.appendChild(divBotoesJogador);
        divJogador.appendChild(btnEstadoJogador);
    }

    relogioGateball.appendChild(divJogador);
}

function GanhaPontuacao(objJogador) {
    objJogador.AumentaPontuacao();

    let id = objJogador.idJogador;
    let pontos = objJogador.pontuacaoJogador;
    let avanco = objJogador.avancoJogador;

    AlteraPontuacao(id, pontos);
    AlteraAvanco(id, avanco);
}

function PerdePontuacao(objJogador) {
    objJogador.DiminuiPontuacao();

    let id = objJogador.idJogador;
    let pontos = objJogador.pontuacaoJogador;
    let avanco = objJogador.avancoJogador;

    AlteraPontuacao(id, pontos);
    AlteraAvanco(id, avanco);
}

function AlteraPontuacao(id, pontuacao) {
    const areaTexto = document.querySelector("#" + id).querySelector('.jogador_pontuacao');
    areaTexto.innerHTML = pontuacao;
    AtualizaPontuacaoTotal();
}

function AlteraAvanco(id, avanco) {
    const arrayAvanco = document.querySelector("#" + id).querySelectorAll(".jogador_avanco");
    switch (avanco) {
        case 1:
            arrayAvanco[0].classList.add("ativo");
            arrayAvanco[1].classList.remove("ativo");
            arrayAvanco[2].classList.remove("ativo");
            arrayAvanco[3].classList.remove("ativo");
            break;

        case 2:
            arrayAvanco[0].classList.add("ativo");
            arrayAvanco[1].classList.add("ativo");
            arrayAvanco[2].classList.remove("ativo");
            arrayAvanco[3].classList.remove("ativo");
            break;

        case 3:
            arrayAvanco[0].classList.add("ativo");
            arrayAvanco[1].classList.add("ativo");
            arrayAvanco[2].classList.add("ativo");
            arrayAvanco[3].classList.remove("ativo");
            break;
            
        case 4:
            arrayAvanco[0].classList.add("ativo");
            arrayAvanco[1].classList.add("ativo");
            arrayAvanco[2].classList.add("ativo");
            arrayAvanco[3].classList.add("ativo");
            break;
    
        default:
            arrayAvanco[0].classList.remove("ativo");
            arrayAvanco[1].classList.remove("ativo");
            arrayAvanco[2].classList.remove("ativo");
            arrayAvanco[3].classList.remove("ativo");
            break;
    }
}

function AtualizaPontuacaoTotal() {
    const pontucaoVermelho = document.querySelector('.time-vermelho_pontuacao');
    const pontucaoBranco = document.querySelector('.time-branco_pontuacao');

    let pontuacaoTimeVermelho = 0;
    let pontuacaoTimeBranco = 0;

    for (let i = 0; i < jogadores.length; i++) {
        if (jogadores[i].numeroJogador % 2 == 0) {
            pontuacaoTimeBranco += jogadores[i].pontuacaoJogador;
        } else {
            pontuacaoTimeVermelho += jogadores[i].pontuacaoJogador;
        }
    }

    pontucaoVermelho.innerHTML = pontuacaoTimeVermelho;
    pontucaoBranco.innerHTML = pontuacaoTimeBranco;
}


// controla o nome dos times
// controla o fim de jogo

