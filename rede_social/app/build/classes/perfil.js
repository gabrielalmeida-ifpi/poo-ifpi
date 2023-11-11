"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Perfil = void 0;
class Perfil {
    constructor(id, user, email) {
        this._postagens = [];
        this._bloqueados = [];
        this._id = id;
        this._user = user;
        this._email = email;
    }
    get id() {
        return this._id;
    }
    get user() {
        return this._user;
    }
    get email() {
        return this._email;
    }
    get postagens() {
        return this._postagens;
    }
    get bloqueados() {
        return this._bloqueados;
    }
}
exports.Perfil = Perfil;
