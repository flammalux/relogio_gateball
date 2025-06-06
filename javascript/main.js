const relogioGateball    = document.querySelector('#relogioGateball');
const pontucaoVermelho   = document.querySelector('.time-vermelho_pontuacao');
const pontucaoBranco     = document.querySelector('.time-branco_pontuacao');

const temporizador       = document.querySelector('#contador-regressivo');
const btnAumentaTempo    = document.querySelector('.aumenta_tempo');
const btnDiminuiTempo    = document.querySelector('.diminui_tempo');
const btnResetaTempo     = document.querySelector('.reseta_tempo');
const tempoIncremento    = 5;
const tempoPartidaMaximo = 30;
const tempoPartidaMinimo = 20;
const tempo1aAdvertencia = 15;
const tempo2aAdvertencia = 10;
const tempo3aAdvertencia = 5;
let tempoPartida         = 30;

const jogadores          = new Array();
const numeroDeJogadores  = 10;

const contador = new ContadorRegressivo(tempoPartida, temporizador);

temporizador.innerHTML = contador.tempoTexto;
temporizador.addEventListener('click', () => {
    if (contador.fim == true) {
        contador.ResetaContagem();
        temporizador.innerHTML = contador.tempoTexto;
    }
    
    temporizador.classList.toggle('ativo');
    if (temporizador.classList.contains('ativo')) {
        contador.IniciaContagem();
    }else {
        contador.PausaContagem();
    }
});

btnResetaTempo.addEventListener('click', () => {
    if (!temporizador.classList.contains('ativo')) {
        contador.ResetaContagem();
        temporizador.innerHTML = contador.tempoTexto;
    }
});

btnAumentaTempo.addEventListener('click', () => {
    if (!temporizador.classList.contains('ativo')) {
        console.log(contador.tempo)
        if (contador.tempo < tempoPartidaMaximo * 60) {
            contador.AumentaTempo(tempoIncremento);
            temporizador.innerHTML = contador.tempoTexto;
        }

        if (contador.tempo >= tempoPartidaMaximo * 60) {
            contador.tempo = tempoPartidaMaximo;
            contador.ResetaContagem();
            temporizador.innerHTML = contador.tempoTexto;
        }
    }
});

btnDiminuiTempo.addEventListener('click', () => {
    if (!temporizador.classList.contains('ativo')) {
        console.log(contador.tempo)
        if (contador.tempo > tempoPartidaMinimo * 60) {
            contador.DiminuiTempo(tempoIncremento);
            temporizador.innerHTML = contador.tempoTexto;
        }

        if (contador.tempo <= tempoPartidaMinimo * 60) {
            contador.tempo = tempoPartidaMinimo;
            contador.ResetaContagem();
            temporizador.innerHTML = contador.tempoTexto;
        }
    }
});

CriaJogadores();

// esta função cria os jogadores e os elementos HTML desses jogadores
function CriaJogadores () {
    for (let i = 1; i <= numeroDeJogadores; i++) {
        
        let idJogador = 'jogador-' + i;
        let jogador = new Jogador(idJogador, i);

        jogadores.push(jogador);
        
        let divJogador = document.createElement('div');
        divJogador.setAttribute('id', idJogador);
        
        let classeTime = 'time-vermelho_jogador';

        let spanNumeroJogador = document.createElement('span');
        spanNumeroJogador.setAttribute('class', 'jogador_numero');
        spanNumeroJogador.innerHTML = i;

        // cria a div que mostra a pontuação do jogador
        let divPontuacaoJogador = document.createElement('div');
        divPontuacaoJogador.setAttribute('class', 'jogador_pontuacao');
        divPontuacaoJogador.innerHTML = '0';

        // cria o envólucro dos marcadores do avanço do jogador
        let divAvancoJogadorWrapper = document.createElement('div');
        divAvancoJogadorWrapper.setAttribute('class', 'jogador_avanco-wrapper');

        // este laço cria os marcadores do avanço do jogador
        let identificacaoAvanco = [1, 2, 3, 'A'];
        for (let i = 0; i < 4; i++) {
            let divAvancoJogador = document.createElement('div');
            divAvancoJogador.setAttribute('class', 'jogador_avanco');
            divAvancoJogador.innerHTML = identificacaoAvanco[i];
            divAvancoJogadorWrapper.appendChild(divAvancoJogador);
        }

        // cria o envólucro dos botôes de aumentar e diminuir a pontuação 
        let divBotoesJogador = document.createElement('div');
        divBotoesJogador.setAttribute('class', 'jogador_botoes');

        // cria o botão de aumentar pontuação
        let btnAumentaPontuacao = document.createElement('button');
        btnAumentaPontuacao.setAttribute('class', 'aumenta_pontuacao');
        btnAumentaPontuacao.innerHTML = '+';

        // cria o botão de diminuir pontuação
        let btnDiminuiPontuacao = document.createElement('button');
        btnDiminuiPontuacao.setAttribute('class', 'diminui_pontuacao');
        btnDiminuiPontuacao.innerHTML = '-';
        
        // cria o evento de click do botão que aumenta pontuação
        btnAumentaPontuacao.addEventListener('click', () => {
            GanhaPontuacao(jogadores[(i-1)]);
        });
            
        // cria o evento de click do botão que diminui pontuação
        btnDiminuiPontuacao.addEventListener('click', () => {
            PerdePontuacao(jogadores[(i-1)]);
        });
        
        // coloca os botões de aumentar e diminuir pontuação como filhos do invólucro
        divBotoesJogador.appendChild(btnDiminuiPontuacao);
        divBotoesJogador.appendChild(btnAumentaPontuacao);
        
        // cria o botão da situação do jogador (in/out)
        let btnEstadoJogador = document.createElement('button');
        btnEstadoJogador.setAttribute('class', 'jogador_estado');
        btnEstadoJogador.innerHTML = 'out';

        // cria o evento de click do botão que mostra o estado do jogador
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
            divJogador.appendChild(divBotoesJogador);
            divJogador.appendChild(divPontuacaoJogador);
            divJogador.appendChild(divAvancoJogadorWrapper);
            divJogador.appendChild(btnEstadoJogador);
        }

        relogioGateball.appendChild(divJogador);
    }
}

function GanhaPontuacao(objJogador) {
    objJogador.AumentaPontuacao();
    AlteraPontuacao(objJogador);
}

function PerdePontuacao(objJogador) {
    objJogador.DiminuiPontuacao();
    AlteraPontuacao(objJogador);
}

function AlteraPontuacao(objJogador) {
    let id = objJogador.id;
    let pontos = objJogador.pontuacao;
    let avanco = objJogador.avanco;

    let areaTexto = document.querySelector("#" + id).querySelector('.jogador_pontuacao');
    areaTexto.innerHTML = pontos;

    AlteraAvanco(id, avanco);
    AtualizaPontuacaoTotal();
}

function AlteraAvanco(id, avanco) {
    let arrayAvanco = document.querySelector("#" + id).querySelectorAll(".jogador_avanco");
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
    let pontuacaoTimeVermelho = 0;
    let pontuacaoTimeBranco = 0;

    for (let i = 0; i < jogadores.length; i++) {
        if (jogadores[i].numero % 2 == 0) {
            pontuacaoTimeBranco += jogadores[i].pontuacao;
        } else {
            pontuacaoTimeVermelho += jogadores[i].pontuacao;
        }
    }

    pontucaoVermelho.innerHTML = pontuacaoTimeVermelho;
    pontucaoBranco.innerHTML = pontuacaoTimeBranco;
}

const btnVisibilidadeRelogio = document.querySelector('#btn_visibilidade_relogio');

btnVisibilidadeRelogio.addEventListener('click', () => {
    if (relogioGateball.getAttribute('data-vis_relogio') === "visivel") {
        relogioGateball.setAttribute('data-vis_relogio', "oculto");
    } else {
        relogioGateball.setAttribute('data-vis_relogio', "visivel");
    }
})

// controla o nome dos times
// controla o fim de jogo

