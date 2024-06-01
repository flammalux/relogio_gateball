class Jogador {
    constructor (id, numero) {
        this.idJogador = id;
        this.numeroJogador = numero;
        this.pontuacaoJogador = 0;
        this.avancoJogador = 0;
        this.situacaoJogador = 0;
        this.timeJogador = 0;
    }

    AumentaPontuacao() {
        if(this.pontuacaoJogador < 5) {
            this.pontuacaoJogador += 1;
            if (this.pontuacaoJogador == 4) {
                this.pontuacaoJogador = 5;
            }
            this.avancoJogador += 1;
        }else {
            console.log("Valor máximo de pontuação obtido");
        }
        return;
    }

    DiminuiPontuacao() {
        if(this.pontuacaoJogador > 0) {
            this.pontuacaoJogador -= 1;
            if (this.pontuacaoJogador == 4) {
                this.pontuacaoJogador = 3;
            }
            this.avancoJogador -= 1;
        }else {
            console.log("Valor mínimo de pontuação obtido");
        }
        return;
    }
}

