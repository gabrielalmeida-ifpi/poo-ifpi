"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostagemAvancada = void 0;
const postagem_1 = require("./postagem");
class PostagemAvancada extends postagem_1.Postagem {
    constructor(id, texto, curtidas, descurtidas, data, perfil, visualizacoesRestantes) {
        super(id, texto, curtidas, descurtidas, data, perfil);
        this._hashtags = [];
        this._visualizacoesRestantes = visualizacoesRestantes;
    }
    adicionarHashtags(...hashtag) {
        for (let hash of hashtag) {
            this._hashtags.push(hash);
        }
    }
    existeHashtag(hashtag) {
        return this._hashtags.includes(hashtag);
    }
    decrementarVisualizacoes() {
        if (this._visualizacoesRestantes > 0) {
            this._visualizacoesRestantes--;
        }
    }
    get hashtags() {
        return this._hashtags;
    }
    get visualizacoesRestantes() {
        return this._visualizacoesRestantes;
    }
    set hashtags(hashtags) {
        hashtags = hashtags;
    }
}
exports.PostagemAvancada = PostagemAvancada;
