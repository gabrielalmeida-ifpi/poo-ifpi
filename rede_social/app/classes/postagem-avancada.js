"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostagemAvancada = void 0;
var postagem_1 = require("./postagem");
var PostagemAvancada = /** @class */ (function (_super) {
    __extends(PostagemAvancada, _super);
    function PostagemAvancada(id, texto, curtidas, descurtidas, data, perfil, visualizacoesRestantes) {
        var _this = _super.call(this, id, texto, curtidas, descurtidas, data, perfil) || this;
        _this._hashtags = [];
        _this._visualizacoesRestantes = visualizacoesRestantes;
        return _this;
    }
    PostagemAvancada.prototype.adicionarHashtags = function () {
        var hashtag = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            hashtag[_i] = arguments[_i];
        }
        for (var _a = 0, hashtag_1 = hashtag; _a < hashtag_1.length; _a++) {
            var hash = hashtag_1[_a];
            this._hashtags.push(hash);
        }
    };
    PostagemAvancada.prototype.existeHashtag = function (hashtag) {
        return this._hashtags.includes(hashtag);
    };
    PostagemAvancada.prototype.decrementarVisualizacoes = function () {
        if (this._visualizacoesRestantes > 0) {
            this._visualizacoesRestantes--;
        }
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
            return this._visualizacoesRestantes;
        },
        enumerable: false,
        configurable: true
    });
    return PostagemAvancada;
}(postagem_1.Postagem));
exports.PostagemAvancada = PostagemAvancada;
