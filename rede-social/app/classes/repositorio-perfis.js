"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositorioDePerfis = void 0;
var RepositorioDePerfis = /** @class */ (function () {
    function RepositorioDePerfis() {
        this._perfis = [];
    }
    RepositorioDePerfis.prototype.incluir = function (perfil) {
        this._perfis.push(perfil);
    };
    RepositorioDePerfis.prototype.consultar = function (id, user, email) {
        var perfilEncontrado = this._perfis.find(function (perfil) {
            return (id != undefined && perfil.id == id) ||
                (user != undefined && perfil.user == user) ||
                (email != undefined && perfil.email == email);
        });
        return perfilEncontrado || null;
    };
    Object.defineProperty(RepositorioDePerfis.prototype, "perfis", {
        get: function () {
            return this._perfis;
        },
        enumerable: false,
        configurable: true
    });
    return RepositorioDePerfis;
}());
exports.RepositorioDePerfis = RepositorioDePerfis;
