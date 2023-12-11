import { Perfil } from "./perfil"

export interface IRepositorioDePerfis {
    logar(user: string, senha: string): Perfil | null;
    inserir(perfil: Perfil): void;
    consultar(id?: number, nome?: string, email?: string, senha?: string): Perfil | null;
}

export class RepositorioDePerfis implements IRepositorioDePerfis {
    private _perfis: Perfil[] = []

    public inserir(perfil: Perfil): void {
        this._perfis.push(perfil)
    }

    public consultar(id?: number, user?: string, email?: string, senha?: string): Perfil | null {
        const perfilEncontrado = this._perfis.find((perfil) => {
            return (id != undefined && perfil.id == id) ||
                   (user != undefined && perfil.user == user) ||
                   (email != undefined && perfil.email == email) ||
                   (senha != undefined && perfil.senha == senha)
        })

        return perfilEncontrado || null
    }

    public logar(user: string, senha: string): Perfil | null {
        const perfilLogado = this._perfis.find((perfil) => {
            return (perfil.user == user) && (perfil.senha == senha)
        })

        return perfilLogado || null
    }
    
    public get perfis() : Perfil[] {
        return this._perfis
    }
    
    public set perfis(perfis: Perfil[]) {
        this._perfis = perfis
    }
}
