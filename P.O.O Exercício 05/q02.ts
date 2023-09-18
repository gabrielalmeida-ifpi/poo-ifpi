class Postagem {
    id: number;
    texto: string;
    quantidadeCurtidas: number;

    constructor(id: number, texto: string, quantidadeCurtidas: number) {
        this.id = id;
        this.texto = texto;
        this.quantidadeCurtidas = quantidadeCurtidas;
    }

    curtir() {
        this.quantidadeCurtidas++
    }

    toString() {
        return console.log(`Postagem: ${this.texto}
        Quantidade de Curtidas: ${this.quantidadeCurtidas}`)
    }
}

class Microblog {
    postagens: Postagem[] = []

    adicionar_postagem(postagem: Postagem) {
        this.postagens.push(postagem)
    }

    consultar(id: number): Postagem {
        let postagem_procurada!: Postagem;

        for (let i: number = 0; i < this.postagens.length; i++) {
            if (this.postagens[i].id == id) {
                postagem_procurada = this.postagens[i];
                break;
            }
        }

        return postagem_procurada;
    }

    consultar_por_indice(id: number): number {
        let indice_procurado: number = -1;

        for (let i: number = 0; i < this.postagens.length; i++) {
            if (this.postagens[i].id == id) {
                indice_procurado = i;
                break;
            }
        }

        return indice_procurado;
    }

    excluir_postagem(id: number): void {
        let indiceProcurado = this.consultar_por_indice(id);

        if (indiceProcurado != -1) {
            for (let i = indiceProcurado; i < this.postagens.length; i++) {
                this.postagens[i] = this.postagens[i+1];
            }
            this.postagens.pop();
            
        }
    }

    retornar_mais_curtida() {
        let maior_numero: number = 0
        let postagem_mais_curtida!: Postagem;
        for (let i: number = 0; i < this.postagens.length; i++) {
            if (this.postagens[i].quantidadeCurtidas >= maior_numero) {
                maior_numero = this.postagens[i].quantidadeCurtidas
                postagem_mais_curtida = this.postagens[i]
            }
        }
        console.log(`A postagem mais curtida foi: 
        ${postagem_mais_curtida.texto}
        Esta postagem teve ${postagem_mais_curtida.quantidadeCurtidas} curtidas.`)
    }

    curtir_postagem(id: number) {
        let postagem_a_curtir: Postagem = this.consultar(id)
        postagem_a_curtir.curtir()
    }

    toString() {
        let concatenacao: string = ``

        for (let i: number = 0; i < this.postagens.length; i++) {
            let postagem_atual: Postagem = this.postagens[i]

            concatenacao += postagem_atual.toString()
        }

        return console.log(concatenacao)
    }
}