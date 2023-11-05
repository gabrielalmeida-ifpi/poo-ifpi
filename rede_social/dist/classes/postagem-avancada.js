var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Postagem } from "./postagem.js";
var PostagemAvancada = /** @class */ (function (_super) {
    __extends(PostagemAvancada, _super);
    function PostagemAvancada(id, texto, curtidas, descurtidas, data, perfil, hashtags, visualizacoesRestantes) {
        var _this = _super.call(this, id, texto, curtidas, descurtidas, data, perfil) || this;
        _this._hashtags = hashtags;
        _this._visualizacoesRestantes = visualizacoesRestantes;
        return _this;
    }
    PostagemAvancada.prototype.adicionarHashtags = function (hashtag) {
        this._hashtags.push(hashtag);
    };
    PostagemAvancada.prototype.existeHashtag = function (hashtag) {
        return this._hashtags.includes(hashtag);
    };
    PostagemAvancada.prototype.decrementarVisualizacoes = function () {
        this._visualizacoesRestantes--;
    };
    Object.defineProperty(PostagemAvancada.prototype, "hashtags", {
        get: function () {
            return this._hashtags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PostagemAvancada.prototype, "visualizacoesRestantes", {
        get: function () {
            return this.visualizacoesRestantes;
        },
        enumerable: false,
        configurable: true
    });
    return PostagemAvancada;
}(Postagem));
export { PostagemAvancada };
