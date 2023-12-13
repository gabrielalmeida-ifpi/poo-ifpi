"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositorioDePerfis = void 0;
class RepositorioDePerfis {
    constructor() {
        this._perfis = [];
    }
    incluir(perfil) {
        this._perfis.push(perfil);
    }
    consultar(id, user, email, senha) {
        const perfilEncontrado = this._perfis.find((perfil) => {
            return (id != undefined && perfil.id == id) ||
                (user != undefined && perfil.user == user) ||
                (email != undefined && perfil.email == email) ||
                (senha != undefined && perfil.senha == senha);
        });
        return perfilEncontrado || null;
    }
    logar(user, senha) {
        const perfilLogado = this._perfis.find((perfil) => {
            return (perfil.user == user) && (perfil.senha == senha);
        });
        return perfilLogado || null;
    }
    get perfis() {
        return this._perfis;
    }
    set perfis(perfis) {
        this._perfis = perfis;
    }
}
exports.RepositorioDePerfis = RepositorioDePerfis;
