"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositorioDePostagens = void 0;
var postagem_avancada_1 = require("./postagem-avancada");
var RepositorioDePostagens = /** @class */ (function () {
    function RepositorioDePostagens() {
        this._postagens = [];
    }
    RepositorioDePostagens.prototype.incluir = function (postagem) {
        this._postagens.push(postagem);
        if (postagem.perfil) {
            postagem.perfil.postagens.push(postagem);
        }
    };
    RepositorioDePostagens.prototype.consultar = function (id, texto, hashtag, perfil) {
        if (perfil === void 0) { perfil = null; }
        var postagensFiltradas = this._postagens.filter(function (postagem) {
            return (id != undefined && postagem.id == id) ||
                (texto != undefined && postagem.texto.includes(texto)) ||
                (perfil != null && postagem.perfil == perfil);
        });
        if (hashtag != undefined) {
            var postagensComHashtag = postagensFiltradas.filter(function (postagem) {
                return postagem instanceof postagem_avancada_1.PostagemAvancada && postagem.hashtags.includes(hashtag);
            });
            return postagensComHashtag;
        }
        return postagensFiltradas;
    };
    Object.defineProperty(RepositorioDePostagens.prototype, "postagens", {
        get: function () {
            return this._postagens;
        },
        enumerable: false,
        configurable: true
    });
    return RepositorioDePostagens;
}());
exports.RepositorioDePostagens = RepositorioDePostagens;
