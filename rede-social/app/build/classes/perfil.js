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
        let indiceRemovido = -1;
        for (let seguidor of this._seguidores) {
            if (seguidorRemovido.id == seguidor._id) {
                indiceRemovido = this._seguidores.indexOf(seguidor);
            }
        }
        if (indiceRemovido != -1) {
            this._seguidores.splice(indiceRemovido, 1);
        }
        else {
            throw new error_1.AplicacaoError("Voce nao segue essa pessoa!");
        }
    }
    desseguir(desseguindo) {
        let verificacao = false;
        let seguidoEncontrado = new Perfil(0, '', '', '');
        for (let seguido of this._seguidos) {
            if (desseguindo.id == seguido._id) {
                verificacao = true;
                seguidoEncontrado = seguido;
                break;
            }
        }
        if (verificacao) {
            let indiceRemovido = this._seguidores.indexOf(seguidoEncontrado);
            this._seguidos.splice(indiceRemovido, 1);
        }
        else {
            throw new Error("Voce nao esta seguindo esse perfil");
        }
    }
    desbloquear(desbloqueado) {
        let verificacao = false;
        let bloqueadoEncontrado = new Perfil(0, '', '', '');
        for (let bloqueado of this._bloqueados) {
            if (desbloqueado.id == bloqueado._id) {
                verificacao = true;
                bloqueadoEncontrado = bloqueado;
                break;
            }
        }
        if (verificacao) {
            let indiceRemovido = this._bloqueados.indexOf(bloqueadoEncontrado);
            this._bloqueados.splice(indiceRemovido, 1);
        }
        else {
            throw new Error("Este perfil nao esta bloqueado");
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
