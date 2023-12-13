"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Perfil = void 0;
const error_1 = require("./error");
class Perfil {
    constructor(id, user, email, senha) {
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
    // alterado
    bloquear(perfilBloqueado) {
        const perfilAchado = this._bloqueados.find((perfil) => {
            return (perfil == perfilBloqueado);
        });
        if (!perfilAchado) {
            this._bloqueados.push(perfilBloqueado);
        }
        else {
            throw new error_1.BloquearError("Peril ja bloqueado");
        }
    }
    // alterado
    seguir(perfilSeguido) {
        const perfilAchado = this._seguidos.find((perfil) => {
            return (perfil == perfilSeguido);
        });
        if (!perfilAchado) {
            perfilSeguido.seguidores.push(this);
            this._seguidos.push(perfilSeguido);
        }
        else {
            throw new error_1.BloquearError("Peril ja seguido");
        }
    }
    //alterado
    removerSeguidor(seguidorRemovido) {
        for (let seguidor of this._seguidores) {
            try {
                if (seguidorRemovido.id == seguidor._id) {
                    let indiceRemovido = this._seguidores.indexOf(seguidor);
                    this._seguidores.splice(indiceRemovido, 1);
                }
            }
            catch (error) {
                console.log("Perfil nao eh seguidor");
            }
        }
    }
    desseguir(desseguindo) {
        for (let seguidor of this._seguidores) {
            if (desseguindo.id == seguidor._id) {
                let indiceRemovido = this._seguidores.indexOf(seguidor);
                this._seguidores.splice(indiceRemovido, 1);
            }
        }
    }
    desbloquear(desbloqueado) {
        for (let bloqueado of this._bloqueados) {
            if (desbloqueado.id == bloqueado._id) {
                let indiceRemovido = this._bloqueados.indexOf(bloqueado);
                this._bloqueados.splice(indiceRemovido, 1);
            }
        }
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
    get seguidores() {
        return this._seguidores;
    }
    get seguidos() {
        return this._seguidos;
    }
    get senha() {
        return this._senha;
    }
}
exports.Perfil = Perfil;
