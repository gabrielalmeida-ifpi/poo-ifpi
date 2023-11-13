"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Postagem = void 0;
var Postagem = /** @class */ (function () {
    function Postagem(id, texto, curtidas, descurtidas, data, perfil) {
        this._id = id;
        this._texto = texto;
        this._curtidas = curtidas;
        this._descurtidas = descurtidas;
        this._data = data;
        this._perfil = perfil;
    }
    Postagem.prototype.ehPopular = function () {
        // verifica se o numero de curtidas eh 50% maior que o numero de descurtidas
        return this._curtidas == (this._descurtidas * 1.5);
    };
    Object.defineProperty(Postagem.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Postagem.prototype, "texto", {
        get: function () {
            return this._texto;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Postagem.prototype, "curtidas", {
        get: function () {
            return this._curtidas;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Postagem.prototype, "descurtidas", {
        get: function () {
            return this._descurtidas;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Postagem.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Postagem.prototype, "perfil", {
        get: function () {
            return this._perfil;
        },
        enumerable: false,
        configurable: true
    });
    Postagem.prototype.curtir = function () {
        this._curtidas++;
    };
    Postagem.prototype.descurtir = function () {
        this._descurtidas++;
    };
    return Postagem;
}());
exports.Postagem = Postagem;
