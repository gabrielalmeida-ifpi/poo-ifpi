"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Perfil = void 0;
var Perfil = /** @class */ (function () {
    function Perfil(id, user, email, senha) {
        this._postagens = [];
        this._bloqueados = [];
        this._seguidores = [];
        this._senha = '';
        this._seguidos = [];
        this._id = id;
        this._user = user;
        this._email = email;
        this._senha = senha;
    }
    Perfil.prototype.bloquear = function (perfilBloqueado) {
        this._bloqueados.push(perfilBloqueado);
    };
    Perfil.prototype.seguir = function (perfilSeguido) {
        perfilSeguido.seguidores.push(this);
        this._seguidos.push(perfilSeguido);
    };
    Perfil.prototype.removerSeguidor = function (seguidorRemovido) {
        for (var _i = 0, _a = this._seguidores; _i < _a.length; _i++) {
            var seguidor = _a[_i];
            if (seguidorRemovido.id == seguidor._id) {
                var indiceRemovido = this._seguidores.indexOf(seguidor);
                this._seguidores.splice(indiceRemovido, 1);
            }
        }
    };
    Perfil.prototype.desseguir = function (desseguindo) {
        for (var _i = 0, _a = this._seguidores; _i < _a.length; _i++) {
            var seguidor = _a[_i];
            if (desseguindo.id == seguidor._id) {
                var indiceRemovido = this._seguidores.indexOf(seguidor);
                this._seguidores.splice(indiceRemovido, 1);
            }
        }
    };
    Perfil.prototype.desbloquear = function (desbloqueado) {
        for (var _i = 0, _a = this._bloqueados; _i < _a.length; _i++) {
            var bloqueado = _a[_i];
            if (desbloqueado.id == bloqueado._id) {
                var indiceRemovido = this._bloqueados.indexOf(bloqueado);
                this._bloqueados.splice(indiceRemovido, 1);
            }
        }
    };
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
    Object.defineProperty(Perfil.prototype, "seguidores", {
        get: function () {
            return this._seguidores;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Perfil.prototype, "seguidos", {
        get: function () {
            return this._seguidos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Perfil.prototype, "senha", {
        get: function () {
            return this._senha;
        },
        enumerable: false,
        configurable: true
    });
    return Perfil;
}());
exports.Perfil = Perfil;
