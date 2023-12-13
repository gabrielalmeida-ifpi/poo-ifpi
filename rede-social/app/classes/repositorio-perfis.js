"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositorioDePerfis = void 0;
var RepositorioDePerfis = /** @class */ (function () {
    function RepositorioDePerfis() {
        this._perfis = [];
    }
    RepositorioDePerfis.prototype.inserir = function (perfil) {
        this._perfis.push(perfil);
    };
    RepositorioDePerfis.prototype.consultar = function (id, user, email, senha) {
        var perfilEncontrado = this._perfis.find(function (perfil) {
            return (id != undefined && perfil.id == id) ||
                (user != undefined && perfil.user == user) ||
                (email != undefined && perfil.email == email) ||
                (senha != undefined && perfil.senha == senha);
        });
        return perfilEncontrado || null;
    };
    RepositorioDePerfis.prototype.logar = function (user, senha) {
        var perfilLogado = this._perfis.find(function (perfil) {
            return (perfil.user == user) && (perfil.senha == senha);
        });
        return perfilLogado || null;
    };
    Object.defineProperty(RepositorioDePerfis.prototype, "perfis", {
        get: function () {
            return this._perfis;
        },
        set: function (perfis) {
            this._perfis = perfis;
        },
        enumerable: false,
        configurable: true
    });
    return RepositorioDePerfis;
}());
exports.RepositorioDePerfis = RepositorioDePerfis;
