class Jogador {
    constructor (id, numero) {
        this.idJogador = id;
        this.numeroJogador = numero;
        this.pontuacaoJogador = 0;
        this.avancoJogador = 0;
        this.situacaoJogador = true;
        this.timeJogador = "";
    }
    /**
     * @param {boolean} situacao
     */
    get situacao () {return this.situacaoJogador;}

    set situacao (situacao) {this.situacaoJogador = situacao;}

    AumentaPontuacao() {
        if(this.pontuacaoJogador < 5) {
            this.pontuacaoJogador += 1;
            if (this.pontuacaoJogador == 4) {
                this.pontuacaoJogador = 5;
            }
            this.avancoJogador += 1;
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
        }
        return;
    }
}

