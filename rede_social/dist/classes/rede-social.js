import { PostagemAvancada } from "./postagem-avancada.js";
var RedeSocial = /** @class */ (function () {
    function RedeSocial(repoPerfis, repoPostagens) {
        this._repoPerfis = repoPerfis;
        this._repoPostagens = repoPostagens;
    }
    RedeSocial.prototype.incluirPerfil = function (perfil) {
        if (perfil.id != undefined && perfil.user != undefined && perfil.email != undefined && !this._repoPerfis.consultar(perfil.id, perfil.user, perfil.email)) {
            this._repoPerfis.incluir(perfil);
        }
    };
    RedeSocial.prototype.consultarPerfil = function (user, email, id) {
        return this._repoPerfis.consultar(id, user, email);
    };
    RedeSocial.prototype.incluirPostagem = function (postagem) {
        var idRepetido = false;
        if (postagem.texto != null && postagem.id != null && postagem.perfil != null) {
            for (var i = 0; i < this._repoPostagens.postagens.length; i++) {
                if (this._repoPostagens.postagens[i].id == postagem.id) {
                    idRepetido = true;
                }
            }
        }
        if (idRepetido == false) {
            this._repoPostagens.incluir(postagem);
        }
        return null;
    };
    RedeSocial.prototype.consultarPostagem = function (texto, hashtag, perfil, id) {
        this._repoPostagens.consultar(texto, hashtag, perfil, id);
    };
    RedeSocial.prototype.curtir = function (idPostagem) {
        var postagens = this._repoPostagens.postagens;
        for (var i = 0; i < postagens.length; i++) {
            if (postagens[i].id == idPostagem) {
                postagens[i].curtir();
            }
        }
    };
    RedeSocial.prototype.descurtir = function (idPostagem) {
        var postagens = this._repoPostagens.postagens;
        for (var i = 0; i < postagens.length; i++) {
            if (postagens[i].id == idPostagem) {
                postagens[i].descurtir();
            }
        }
    };
    RedeSocial.prototype.decrementarVisualizacoes = function (postagem) {
        postagem.decrementarVisualizacoes();
    };
    RedeSocial.prototype.exibirPostagensPorPerfil = function (id) {
        var postagensExibidas;
        var postagens = this._repoPostagens.postagens;
        var postagemAtual;
        var postagemAvancadaAtual;
        for (var i = 0; i < postagens.length; i++) {
            if (postagens[i].perfil.id == id) {
                if (postagens[i] instanceof PostagemAvancada) {
                    postagemAvancadaAtual = postagens[i];
                    this.decrementarVisualizacoes(postagemAvancadaAtual);
                    if (postagemAvancadaAtual.visualizacoesRestantes > 0) {
                        postagensExibidas.push(postagemAvancadaAtual);
                    }
                }
                postagemAtual = postagens[i];
                postagensExibidas.push(postagemAtual);
            }
        }
        return postagensExibidas;
    };
    RedeSocial.prototype.exibirPostagensPorHashtag = function (hashtag) {
        var postagensExibidas;
        var postagens = this._repoPostagens.postagens;
        var postagemAvancadaAtual;
        for (var i = 0; i < postagens.length; i++) {
            if (postagens[i] instanceof PostagemAvancada) {
                if (postagens[i] instanceof PostagemAvancada) {
                    postagemAvancadaAtual = postagens[i];
                    if (postagemAvancadaAtual.existeHashtag(hashtag)) {
                        this.decrementarVisualizacoes(postagemAvancadaAtual);
                        if (postagemAvancadaAtual.visualizacoesRestantes > 0) {
                            postagensExibidas.push(postagemAvancadaAtual);
                        }
                    }
                }
            }
        }
        return postagensExibidas;
    };
    Object.defineProperty(RedeSocial.prototype, "repoPerfis", {
        get: function () {
            return this._repoPerfis;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedeSocial.prototype, "repoPostagens", {
        get: function () {
            return this._repoPostagens;
        },
        enumerable: false,
        configurable: true
    });
    return RedeSocial;
}());
export { RedeSocial };
