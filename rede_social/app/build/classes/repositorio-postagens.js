"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositorioDePostagens = void 0;
const postagem_avancada_1 = require("./postagem-avancada");
class RepositorioDePostagens {
    constructor() {
        this._postagens = [];
    }
    incluir(postagem) {
        this._postagens.push(postagem);
        if (postagem.perfil) {
            postagem.perfil.postagens.push(postagem);
        }
    }
    consultar(id, texto, hashtag, perfil = null) {
        const postagensFiltradas = this._postagens.filter((postagem) => {
            return (id != undefined && postagem.id == id) ||
                (texto != undefined && postagem.texto.includes(texto)) ||
                (perfil != null && postagem.perfil == perfil);
        });
        if (hashtag != undefined) {
            const postagensComHashtag = postagensFiltradas.filter((postagem) => {
                return postagem instanceof postagem_avancada_1.PostagemAvancada && postagem.hashtags.includes(hashtag);
            });
            return postagensComHashtag;
        }
        return postagensFiltradas;
    }
    get postagens() {
        return this._postagens;
    }
}
exports.RepositorioDePostagens = RepositorioDePostagens;
