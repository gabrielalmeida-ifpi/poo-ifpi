var Postagem = /** @class */ (function () {
    function Postagem(id, texto, quantidadeCurtidas) {
        this.id = id;
        this.texto = texto;
        this.quantidadeCurtidas = quantidadeCurtidas;
    }
    Postagem.prototype.curtir = function () {
        this.quantidadeCurtidas++;
    };
    Postagem.prototype.toString = function () {
        return console.log("Postagem: ".concat(this.texto, "\n        Quantidade de Curtidas: ").concat(this.quantidadeCurtidas));
    };
    return Postagem;
}());
var Microblog = /** @class */ (function () {
    function Microblog() {
        this.postagens = [];
    }
    Microblog.prototype.adicionar_postagem = function (postagem) {
        this.postagens.push(postagem);
    };
    Microblog.prototype.consultar = function (id) {
        var postagem_procurada;
        for (var i = 0; i < this.postagens.length; i++) {
            if (this.postagens[i].id == id) {
                postagem_procurada = this.postagens[i];
                break;
            }
        }
        return postagem_procurada;
    };
    Microblog.prototype.consultar_por_indice = function (id) {
        var indice_procurado = -1;
        for (var i = 0; i < this.postagens.length; i++) {
            if (this.postagens[i].id == id) {
                indice_procurado = i;
                break;
            }
        }
        return indice_procurado;
    };
    Microblog.prototype.excluir_postagem = function (id) {
        var indiceProcurado = this.consultar_por_indice(id);
        if (indiceProcurado != -1) {
            for (var i = indiceProcurado; i < this.postagens.length; i++) {
                this.postagens[i] = this.postagens[i + 1];
            }
            this.postagens.pop();
        }
    };
    Microblog.prototype.retornar_mais_curtida = function () {
        var maior_numero = 0;
        var postagem_mais_curtida;
        for (var i = 0; i < this.postagens.length; i++) {
            if (this.postagens[i].quantidadeCurtidas >= maior_numero) {
                maior_numero = this.postagens[i].quantidadeCurtidas;
                postagem_mais_curtida = this.postagens[i];
            }
        }
        console.log("A postagem mais curtida foi: \n        ".concat(postagem_mais_curtida.texto, "\n        Esta postagem teve ").concat(postagem_mais_curtida.quantidadeCurtidas, " curtidas."));
    };
    Microblog.prototype.curtir_postagem = function (id) {
        var postagem_a_curtir = this.consultar(id);
        postagem_a_curtir.curtir();
    };
    Microblog.prototype.toString = function () {
        var concatenacao = "";
        for (var i = 0; i < this.postagens.length; i++) {
            var postagem_atual = this.postagens[i];
            concatenacao += postagem_atual.toString();
        }
        return console.log(concatenacao);
    };
    return Microblog;
}());
export {};
