import { Postagem } from "./postagem"

export class Perfil {
    private _id: number
    private _user: string
    private _email: string
    private _postagens: Postagem[] = []
    private _bloqueados: Perfil[] = []

    constructor(id: number, user: string, email: string) { //adicionei os bloqueados
        this._id = id
        this._user = user
        this._email = email
    }
    
    public get id() : number {
        return this._id
    }
    
    public get user() : string {
        return this._user
    }
    
    public get email() : string {
        return this._email
    }
    
    public get postagens() : Postagem[] {
        return this._postagens
    }

    public get bloqueados() : Perfil[] {
        return this._bloqueados
    }
}
