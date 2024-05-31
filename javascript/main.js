const relogioGateball = document.querySelector('#relogio');
const numeroDeJogadores = 10;
const jogadores = new Array();

for (let i = 1; i <= numeroDeJogadores; i++) {
    //este laço cria os jogadores e as divs desses jogadores

    let id = 'jogador-' + i;
    let jogador = new Jogador(id, i);
    jogadores.push(jogador)
    
    let classeTime = 'time-vermelho_jogador';

    if (i%2 == 0) {
        classeTime = 'time-branco_jogador';

        relogioGateball.innerHTML += 
        '<div id="jogador-'+ i +'" class="'+ classeTime +'">                                                          '+
        '        <span class="jogador_estado">out</span>                                                              '+
        '        <div class="jogador_pontuacao">0</div>                                                               '+
        '        <div class="jogador_avanco-wrapper">                                                                 '+
        '            <div class="jogador_avanco"><svg><circle cx="3" cy="3" r="2.5"/></svg></div>                     '+
        '            <div class="jogador_avanco"><svg><circle cx="3" cy="3" r="2.5"/></svg></div>                     '+
        '            <div class="jogador_avanco"><svg><circle cx="3" cy="3" r="2.5"/></svg></div>                     '+
        '            <div class="jogador_avanco"><svg><circle cx="3" cy="3" r="2.5"/></svg></div>                     '+
        '        </div>                                                                                               '+
        '        <div class="jogador_botoes">                                                                         '+
        '            <button class="aumenta_pontuacao" onclick="jogadores['+ (i-1) +'].AumentarPontuacao()">+</button>'+
        '            <button class="diminui_pontuacao" onclick="jogadores['+ (i-1) +'].DiminuirPontuacao()">-</button>'+
        '        </div>                                                                                               '+
        '        <span class="jogador_numero">'+ i +'</span>                                                          '+
        '</div>                                                                                                       '
        ;
    }else {
        relogioGateball.innerHTML += 
        '<div id="jogador-'+ i +'" class="'+ classeTime +'">                                                          '+
        '        <span class="jogador_numero">'+ i +'</span>                                                          '+
        '        <div class="jogador_pontuacao">0</div>                                                               '+
        '        <div class="jogador_avanco-wrapper">                                                                 '+
        '            <div class="jogador_avanco"><svg><circle cx="3" cy="3" r="2.5"/></svg></div>                     '+
        '            <div class="jogador_avanco"><svg><circle cx="3" cy="3" r="2.5"/></svg></div>                     '+
        '            <div class="jogador_avanco"><svg><circle cx="3" cy="3" r="2.5"/></svg></div>                     '+
        '            <div class="jogador_avanco"><svg><circle cx="3" cy="3" r="2.5"/></svg></div>                     '+
        '        </div>                                                                                               '+
        '        <div class="jogador_botoes">                                                                         '+
        '            <button class="aumenta_pontuacao" onclick="jogadores['+ (i-1) +'].AumentarPontuacao()">+</button>'+
        '            <button class="diminui_pontuacao" onclick="jogadores['+ (i-1) +'].DiminuirPontuacao()">-</button>'+
        '        </div>                                                                                               '+
        '        <span class="jogador_estado">out</span>                                                              '+
        '</div>                                                                                                       '
        ;
    }
}


// controla as pontuações dos jogadores
// controla o avanço dos jogadores
// controla o nome dos times
// controla e criar os jogadores
// controla o fim de jogo

