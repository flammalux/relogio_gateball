class ContadorRegressivo {
// class ContadorRegressivo extends HTMLElement {
    constructor (tempoEmMinutos) {
        // super ();
        this.tempo = tempoEmMinutos * 60; // tempo que vai ser diminuído em segundos
        this.tempoDecorrido = this.tempo;
        this.tempoDecorridoEmTexto = this.MostraTempo(this.tempo);
        this.contagemRegressiva = null;
        this.pausado = false;
        this.finalizado = false;
    }

    get contagem () {return this.tempoDecorridoEmTexto;}
    get pausa () {return this.pausado;}
    get fim () {return this.finalizado;}

    IniciaContagem() {
        if (this.pausado == true) {
            this.pausado = false;
        }

        this.contagemRegressiva = setInterval(() => {
            this.tempoDecorrido--;
            if (this.tempoDecorrido < 0) {
                clearInterval(this.contagemRegressiva);
                this.finalizado = true;
            }
            this.tempoDecorridoEmTexto = this.MostraTempo(this.tempoDecorrido);
        }, 1000);
        return;
    }

    PausaContagem() {
        this.pausado = true;
        clearInterval(this.contagemRegressiva);
        return;
    }

    ResetaContagem() {
        clearInterval(this.contagemRegressiva);
        this.tempoDecorrido = this.tempo;
        this.tempoDecorridoEmTexto = "";
        this.finalizado = false;
        return;
    }

    MostraTempo (tempoEmSegundo) {
        const tempo = new Date(tempoEmSegundo * 1000);
        const tempoFormatado = tempo.toLocaleTimeString("pt-br", {minute: "2-digit", second: "2-digit"});
        // console.log(tempoFormatado);
        return tempoFormatado;
    }
}