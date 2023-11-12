"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Perfil = void 0;
var Perfil = /** @class */ (function () {
    function Perfil(id, user, email) {
        this._postagens = [];
        this._bloqueados = [];
        this._id = id;
        this._user = user;
        this._email = email;
    }
    Object.defineProperty(Perfil.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Perfil.prototype, "user", {
        get: function () {
            return this._user;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Perfil.prototype, "email", {
        get: function () {
            return this._email;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Perfil.prototype, "postagens", {
        get: function () {
            return this._postagens;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Perfil.prototype, "bloqueados", {
        get: function () {
            return this._bloqueados;
        },
        enumerable: false,
        configurable: true
    });
    return Perfil;
}());
exports.Perfil = Perfil;
