class ContadorRegressivo {

    #tempo;
    #tempoDecorrido;
    #tempoDecorridoEmTexto;
    #contagemRegressiva;
    #pausado;
    #finalizado;
    #elementoAlterado;

    constructor (tempoEmMinutos, alterar) {
        this.#tempo = this.#MinutosParaSegundos (tempoEmMinutos); // tempo que vai ser diminuído em segundos
        this.#tempoDecorrido = this.#tempo;
        this.#tempoDecorridoEmTexto = this.#MostraTempo(this.#tempo);
        this.#contagemRegressiva = null;
        this.#pausado = true;
        this.#finalizado = false;
        this.#elementoAlterado = alterar;
    }

    get tempo      () {return this.#tempo;}
    get tempoTexto () {return this.#MostraTempo(this.#tempo);}
    get contagem   () {return this.#tempoDecorridoEmTexto;}
    get pausa      () {return this.#pausado;}
    get fim        () {return this.#finalizado;}

    set tempo (tempo) {this.#tempo = this.#MinutosParaSegundos(tempo);}

    IniciaContagem() {
        if (this.#pausado == true) {
            this.#pausado = false;
        }

        this.#contagemRegressiva = setInterval(() => {
            this.#tempoDecorrido--;
            if (this.#tempoDecorrido <= 0) {
                clearInterval(this.#contagemRegressiva);
                this.#finalizado = true;
                this.#elementoAlterado.classList.remove('ativo');
            }
            this.#tempoDecorridoEmTexto = this.#MostraTempo(this.#tempoDecorrido);
            this.#elementoAlterado.innerHTML = this.#tempoDecorridoEmTexto;
        }, 1000);
        return;
    }

    PausaContagem() {
        this.#pausado = true;
        clearInterval(this.#contagemRegressiva);
        return;
    }

    ResetaContagem() {
        clearInterval(this.#contagemRegressiva);
        this.#tempoDecorrido = this.#tempo;
        this.#tempoDecorridoEmTexto = this.#MostraTempo(this.#tempo);
        this.#pausado = true;
        this.#finalizado = false;
        return;
    }

    AumentaTempo (tempo) {
        let tempoExtra = this.#MinutosParaSegundos(tempo);
        this.#tempo += tempoExtra;
        this.ResetaContagem();
        return;
    }

    DiminuiTempo (tempo) {
        let tempoMenor = this.#MinutosParaSegundos(tempo);
        this.#tempo -= tempoMenor;
        this.ResetaContagem();
        return;
    }

    #MostraTempo (tempoEmSegundo) {
        const tempo = new Date(tempoEmSegundo * 1000);
        const tempoFormatado = tempo.toLocaleTimeString("pt-br", {minute: "2-digit", second: "2-digit"});
        return tempoFormatado;
    }

    #MinutosParaSegundos (tempo) {
        return tempo * 60;
    }
}