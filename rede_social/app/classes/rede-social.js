"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedeSocial = void 0;
var postagem_avancada_1 = require("./postagem-avancada");
var RedeSocial = /** @class */ (function () {
    function RedeSocial(repoPerfis, repoPostagens) {
        this._repoPerfis = repoPerfis;
        this._repoPostagens = repoPostagens;
    }
    RedeSocial.prototype.incluirPerfil = function (perfil) {
        var existe = false;
        for (var i = 0; i < this._repoPerfis.perfis.length; i++) {
            if (this._repoPerfis.perfis[i].id == perfil.id) {
                existe = true;
            }
        }
        if (!(existe) && perfil.user != undefined && perfil.email != undefined) {
            this._repoPerfis.incluir(perfil);
            return true;
        }
        return false;
    };
    RedeSocial.prototype.consultarPerfil = function (id, user, email) {
        return this._repoPerfis.consultar(id, user, email);
    };
    RedeSocial.prototype.incluirPostagem = function (postagem) {
        var existe = false;
        for (var i = 0; i < this._repoPostagens.postagens.length; i++) {
            if (this.repoPostagens.postagens[i].id == postagem.id) {
                existe = true;
            }
        }
        if (!(existe) && postagem.texto != undefined && postagem.perfil != undefined) {
            this._repoPostagens.incluir(postagem);
            return true;
        }
        return false;
    };
    RedeSocial.prototype.consultarPostagem = function (id, texto, hashtag, perfil) {
        if (perfil === void 0) { perfil = null; }
        return this._repoPostagens.consultar(id, texto, hashtag, perfil);
    };
    RedeSocial.prototype.curtir = function (idPost) {
        var postagemEncontrada = this._repoPostagens.postagens.find(function (postagem) {
            return (postagem.id == idPost);
        });
        if (postagemEncontrada) {
            postagemEncontrada.curtir();
        }
    };
    RedeSocial.prototype.descurtir = function (idPost) {
        var postagemEncontrada = this._repoPostagens.postagens.find(function (postagem) {
            return (postagem.id == idPost);
        });
        if (postagemEncontrada) {
            postagemEncontrada.descurtir();
        }
    };
    RedeSocial.prototype.decrementarVisualizacoes = function (post) {
        post.decrementarVisualizacoes();
    };
    RedeSocial.prototype.ehExibivel = function (post) {
        if (post.visualizacoesRestantes > 0) {
            return true;
        }
        return false;
    };
    RedeSocial.prototype.exibirPostPerfil = function (id) {
        var perfilEncontrado = this._repoPerfis.perfis.find(function (perfil) {
            return (perfil.id == id);
        });
        var posts = [];
        if (perfilEncontrado) {
            for (var _i = 0, _a = perfilEncontrado.postagens; _i < _a.length; _i++) {
                var post = _a[_i];
                if (post instanceof postagem_avancada_1.PostagemAvancada) {
                    if (this.ehExibivel(post)) { //Coloquei a verificação no método ehExibivel
                        posts.push(post);
                        post.decrementarVisualizacoes();
                    }
                }
                else {
                    posts.push(post);
                }
            }
        }
        return posts;
    };
    RedeSocial.prototype.exibirPostsPopulares = function (repoPostagens) {
        var posts = [];
        for (var _i = 0, _a = repoPostagens.postagens; _i < _a.length; _i++) {
            var post = _a[_i];
            if (post instanceof postagem_avancada_1.PostagemAvancada) {
                if (this.ehExibivel(post) && post.ehPopular()) {
                    posts.push(post);
                    post.decrementarVisualizacoes();
                }
            }
        }
        return posts;
    };
    RedeSocial.prototype.exibirPerfisPopulares = function (repoPerfis) {
        var perfis = [];
        for (var _i = 0, _a = repoPerfis.perfis; _i < _a.length; _i++) {
            var perfil = _a[_i];
            var curtidas = 0;
            var descurtidas = 0;
            for (var _b = 0, _c = perfil.postagens; _b < _c.length; _b++) {
                var post = _c[_b];
                curtidas += post.curtidas;
                descurtidas += post.descurtidas;
            }
            if (curtidas == (descurtidas * 1.5)) {
                perfis.push(perfil);
            }
        }
        return perfis;
    };
    RedeSocial.prototype.bloquearPerfil = function (repoPerfis, perfilBloqueando, idBloqueado) {
        for (var _i = 0, _a = repoPerfis.perfis; _i < _a.length; _i++) {
            var perfil = _a[_i];
            if (perfil.id == idBloqueado) {
                perfilBloqueando.bloqueados.push(perfil);
            }
        }
    };
    RedeSocial.prototype.exibirPostAleatorio = function (repoPostagens) {
        var alcance = repoPostagens.postagens.length;
        var idAleatorio = Math.floor(Math.random() * alcance) + 1;
        for (var _i = 0, _a = this.consultarPostagem(idAleatorio); _i < _a.length; _i++) {
            var post = _a[_i];
            if (post.id == idAleatorio) {
                return post;
            }
        }
        return this.consultarPostagem(idAleatorio)[0];
    };
    RedeSocial.prototype.exibirPerfisAtivos = function (repoPerfis, repoPostagens) {
        var perfis = [];
        var numDePostagens = repoPostagens.postagens.length;
        var numDePerfis = repoPerfis.perfis.length;
        var mediaPostagensPorPerfil = numDePostagens / numDePerfis;
        for (var _i = 0, _a = repoPerfis.perfis; _i < _a.length; _i++) {
            var perfil = _a[_i];
            if (perfil.postagens.length > mediaPostagensPorPerfil) {
                perfis.push(perfil);
            }
        }
        return perfis;
    };
    RedeSocial.prototype.exibirPostsHashtag = function (hashtag) {
        var postsEncontrados = this._repoPostagens.postagens.filter(function (post) {
            return (post instanceof postagem_avancada_1.PostagemAvancada) &&
                (post.existeHashtag(hashtag));
        });
        return postsEncontrados;
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
exports.RedeSocial = RedeSocial;
