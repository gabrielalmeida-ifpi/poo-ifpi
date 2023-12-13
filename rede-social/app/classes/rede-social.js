"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedeSocial = void 0;
var postagem_avancada_1 = require("./postagem-avancada");
var RedeSocial = /** @class */ (function () {
    function RedeSocial(repoPerfis, repoPostagens) {
        this._repoPerfis = repoPerfis;
        this._repoPostagens = repoPostagens;
    }
    RedeSocial.prototype.inserirPerfil = function (perfil) {
        if (this._repoPerfis.consultar(perfil.id, perfil.user, perfil.email)) {
            return false;
        }
        this._repoPerfis.inserir(perfil);
        return true;
    };
    RedeSocial.prototype.consultarPerfil = function (id, user, email, senha) {
        return this._repoPerfis.consultar(id, user, email, senha);
    };
    RedeSocial.prototype.logar = function (user, senha) {
        return this._repoPerfis.logar(user, senha);
    };
    RedeSocial.prototype.inserirPostagem = function (postagem) {
        if (this._repoPostagens.consultar(postagem.id)) {
            return false;
        }
        this._repoPostagens.inserir(postagem);
        return true;
    };
    RedeSocial.prototype.consultarPostagem = function (id, texto, hashtag, perfil) {
        if (perfil === void 0) { perfil = null; }
        return this._repoPostagens.consultar(id, texto, hashtag, perfil);
    };
    RedeSocial.prototype.curtir = function (idPost) {
        var postagemEncontrada = this._repoPostagens.consultar(idPost)[0];
        if (postagemEncontrada) {
            postagemEncontrada.curtir();
        }
    };
    RedeSocial.prototype.descurtir = function (idPost) {
        var postagemEncontrada = this._repoPostagens.consultar(idPost)[0];
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
        var perfilEncontrado = this._repoPerfis.consultar(id);
        var posts = [];
        if (perfilEncontrado) {
            for (var _i = 0, _a = perfilEncontrado.postagens; _i < _a.length; _i++) {
                var post = _a[_i];
                if (post instanceof postagem_avancada_1.PostagemAvancada) {
                    if (this.ehExibivel(post)) {
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
    //public exibirHashtagsPopulares(repoPostagens: IRepositorioDePostagens): string[] { }
    RedeSocial.prototype.bloquearPerfil = function (perfilBloqueando, id, user, email) {
        var perfilBloqueado = this.consultarPerfil(id, user, email);
        var encontrou = false;
        if (perfilBloqueado != null) {
            for (var _i = 0, _a = perfilBloqueando.bloqueados; _i < _a.length; _i++) {
                var bloqueado = _a[_i];
                if (perfilBloqueado.id == bloqueado.id) {
                    encontrou = true;
                }
            }
            if (!encontrou) {
                perfilBloqueando.bloquear(perfilBloqueado);
                return true;
            }
        }
        return false;
    };
    RedeSocial.prototype.desbloquearPerfil = function (perfilDesbloqueando, id, user, email) {
        var perfilDesbloqueado = this.consultarPerfil(id, user, email);
        var encontrou = false;
        if (perfilDesbloqueado != null) {
            for (var _i = 0, _a = perfilDesbloqueando.bloqueados; _i < _a.length; _i++) {
                var bloqueado = _a[_i];
                if (perfilDesbloqueado.id == bloqueado.id) {
                    encontrou = true;
                }
            }
            if (encontrou) {
                perfilDesbloqueando.desbloquear(perfilDesbloqueado);
                return true;
            }
        }
        return false;
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
    //Não faço ideia de como consertar isso:
    RedeSocial.prototype.exibirPostsHashtag = function (hashtag) {
        var postsEncontrados = this._repoPostagens.postagens.filter(function (post) {
            return (post instanceof postagem_avancada_1.PostagemAvancada) &&
                (post.existeHashtag(hashtag));
        });
        return postsEncontrados;
    };
    //////////////////////////////////////////////////////////  
    RedeSocial.prototype.seguirPerfil = function (perfilSeguindo, id, user, email) {
        var perfilSeguido = this.consultarPerfil(id, user, email);
        var encontrou = false;
        if (perfilSeguido != null) {
            for (var _i = 0, _a = perfilSeguido.seguidores; _i < _a.length; _i++) {
                var seguidor = _a[_i];
                if (seguidor.id == perfilSeguindo.id) {
                    encontrou = true;
                }
            }
            if (!encontrou) {
                perfilSeguindo.seguir(perfilSeguido);
                return true;
            }
        }
        return false;
    };
    RedeSocial.prototype.desseguirPerfil = function (perfilDesseguindo, id, user, email) {
        var perfilDesseguido = this.consultarPerfil(id, user, email);
        var encontrou = false;
        if (perfilDesseguido != null) {
            for (var _i = 0, _a = perfilDesseguido.seguidores; _i < _a.length; _i++) {
                var seguidor = _a[_i];
                if (seguidor.id == perfilDesseguindo.id) {
                    encontrou = true;
                }
            }
            if (encontrou) {
                perfilDesseguindo.desseguir(perfilDesseguido);
                perfilDesseguido.removerSeguidor(perfilDesseguindo);
                return true;
            }
        }
        return false;
    };
    RedeSocial.prototype.exibirSeguidores = function (id, user, email) {
        var perfil = this.consultarPerfil(id, user, email);
        var seguidores = [];
        if (perfil != null) {
            for (var _i = 0, _a = perfil.seguidores; _i < _a.length; _i++) {
                var seguidor = _a[_i];
                seguidores.push(seguidor);
            }
        }
        return seguidores;
    };
    RedeSocial.prototype.exibirSeguindo = function (id, user, email) {
        var perfil = this.consultarPerfil(id, user, email);
        var seguindo = [];
        if (perfil != null) {
            for (var _i = 0, _a = perfil.seguidos; _i < _a.length; _i++) {
                var seguido = _a[_i];
                seguindo.push(seguido);
            }
        }
        return seguindo;
    };
    RedeSocial.prototype.exibirPostagensDoSeguidor = function (seguidor) {
        var postagensOrdenadas = seguidor.postagens.sort(function (a, b) { return b.data.getTime() - a.data.getTime(); });
        return postagensOrdenadas;
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
