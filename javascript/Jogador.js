class Jogador {
    constructor (id, numero) {
        this.idJogador = id;
        this.numeroJogador = numero;
        this.pontuacaoJogador = 0;
        this.avancoJogador = 0;
        this.situacaoJogador = 0;
        this.timeJogador = 0;
    }

    AumentarPontuacao() {
        if(this.pontuacaoJogador < 5) {
            this.pontuacaoJogador += 1;
            if (this.pontuacaoJogador == 4) {
                this.pontuacaoJogador = 5;
            }
            this.AlteraPontuacao(); //altera a pontuação do jogador
            this.avancoJogador += 1;
            this.AlteraAvanco(); //altera o avanço do jogador
        }else {
            console.log("Valor máximo de pontuação obtido");
        }
        return;
    }

    DiminuirPontuacao() {
        if(this.pontuacaoJogador > 0) {
            this.pontuacaoJogador -= 1;
            if (this.pontuacaoJogador == 4) {
                this.pontuacaoJogador = 3;
            }
            this.AlteraPontuacao(); //altera a pontuação do jogador
            this.avancoJogador -= 1;
            this.AlteraAvanco(); //altera o avanço do jogador
        }else {
            console.log("Valor mínimo de pontuação obtido");
        }
        return;
    }

    AlteraPontuacao() {
        const areaTexto = document.querySelector("#" + this.idJogador).querySelector('.jogador_pontuacao');
        areaTexto.innerHTML = this.pontuacaoJogador;
    }

    AlteraAvanco() {
        const arrayAvanco = document.querySelector("#" + this.idJogador).querySelectorAll(".jogador_avanco");
        switch (this.avancoJogador) {
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

}
