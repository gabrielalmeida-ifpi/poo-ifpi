import { PostagemAvancada } from "./postagem-avancada.js";
var RepositorioDePostagens = /** @class */ (function () {
    function RepositorioDePostagens(postagens) {
        this._postagens = postagens;
    }
    RepositorioDePostagens.prototype.incluir = function (postagem) {
        this._postagens.push(postagem);
        if (postagem.perfil) {
            postagem.perfil.postagens.push(postagem);
        }
    };
    RepositorioDePostagens.prototype.consultar = function (texto, hashtag, perfil, id) {
        if (texto === void 0) { texto = ""; }
        if (hashtag === void 0) { hashtag = ""; }
        if (perfil === void 0) { perfil = null; }
        if (id === void 0) { id = 0; }
        var postagensFiltradas = this._postagens.filter(function (postagem) {
            return (id != 0 && postagem.id == id) ||
                (texto != "" && postagem.texto.includes(texto)) ||
                (perfil != null && postagem.perfil == perfil);
        });
        if (hashtag != "") {
            var postagensComHashtag = postagensFiltradas.filter(function (postagem) {
                return postagem instanceof PostagemAvancada && postagem.hashtags.includes(hashtag);
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
export { RepositorioDePostagens };
