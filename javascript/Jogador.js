class Jogador {

    #idJogador;
    #numeroJogador;
    #pontuacaoJogador;
    #avancoJogador;
    #situacaoJogador;
    #timeJogador;

    constructor (id, numero) {
        this.#idJogador = id;
        this.#numeroJogador = numero;
        this.#pontuacaoJogador = 0;
        this.#avancoJogador = 0;
        this.#situacaoJogador = true;
        this.#timeJogador = "";
    }
    // GETTERS
    get id        () {return this.#idJogador;}
    get numero    () {return this.#numeroJogador;}
    get pontuacao () {return this.#pontuacaoJogador;}
    get avanco    () {return this.#avancoJogador;}
    get situacao  () {return this.#situacaoJogador;}
    get time      () {return this.#timeJogador;}

    // SETTERS
    /**
     * @param {boolean} situacao;
     * @param {string} time;
     */
    set situacao (situacao) {this.#situacaoJogador = situacao;}
    set time (time) {this.#timeJogador = time;}

    AumentaPontuacao() {
        if(this.#pontuacaoJogador < 5) {
            this.#pontuacaoJogador += 1;
            if (this.#pontuacaoJogador == 4) {
                this.#pontuacaoJogador = 5;
            }
            this.#avancoJogador += 1;
        }
        return;
    }

    DiminuiPontuacao() {
        if(this.#pontuacaoJogador > 0) {
            this.#pontuacaoJogador -= 1;
            if (this.#pontuacaoJogador == 4) {
                this.#pontuacaoJogador = 3;
            }
            this.#avancoJogador -= 1;
        }
        return;
    }
}

