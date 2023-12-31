"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Perfil = void 0;
class Perfil {
    //private _seguidos: Perfil[] = []
    constructor(id, user, email) {
        this._postagens = [];
        this._bloqueados = [];
        this._seguidores = [];
        this._senha = '';
        this._id = id;
        this._user = user;
        this._email = email;
    }
    bloquear(perfilBloqueado) {
        this._bloqueados.push(perfilBloqueado);
    }
    seguir(perfilSeguido) {
        perfilSeguido.seguidores.push(this);
        // this._seguidos.push(perfilSeguido)
    }
    // public removerSeguidor(seguidorRemovido: Perfil) {
    //     for (let seguidor of this._seguidores) {
    //         if (seguidorRemovido.id == seguidor._id) {
    //             let indiceRemovido: number = this._seguidores.indexOf(seguidor)
    //             this._seguidores.splice(indiceRemovido, 1)
    //         }
    //     }
    // }
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
    // public get seguidos() : Perfil[] {
    //     return this._seguidos
    // }
    get senha() {
        return this._senha;
    }
}
exports.Perfil = Perfil;
