class Jogador {
    constructor () {
        this.numeroJogador = 0;
        this.pontuacaoJogador = 0;
        this.avancoJogador = 0;
        this.situacaoJogador = 0;
        this.time = 0;
    }

    AumentarPontuacao () {
        if(this.pontuacaoJogador < 5) {
            this.pontuacaoJogador += 1;
            this.avancoJogador += 1;
            if (this.pontuacaoJogador == 4) {
                this.pontuacaoJogador = 5;
            }
        }else {
            console.log("Valor máximo de pontuação obtido");
        }
        return;
    }

    DiminuirPontuacao() {
        if(this.pontuacaoJogador > 0) {
            this.pontuacaoJogador -= 1;
            this.avancoJogador -= 1;
            if (this.pontuacaoJogador == 4) {
                this.pontuacaoJogador = 3;
            }
        }else {
            console.log("Valor mínimo de pontuação obtido");
        }
        return;
    }

}

let jogador1 = new Jogador ();


