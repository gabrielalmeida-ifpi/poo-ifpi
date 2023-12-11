import { Perfil } from "./perfil";
import { Postagem } from "./postagem";
import { PostagemAvancada } from "./postagem-avancada";
import { RepositorioDePerfis, IRepositorioDePerfis } from "./repositorio-perfis";
import { RepositorioDePostagens, IRepositorioDePostagens } from "./repositorio-postagens";

export class RedeSocial {
    private _repoPerfis: IRepositorioDePerfis
    private _repoPostagens: IRepositorioDePostagens

    constructor(repoPerfis: IRepositorioDePerfis, repoPostagens: IRepositorioDePostagens) {
        this._repoPerfis = repoPerfis
        this._repoPostagens = repoPostagens
    }

    inserirPerfil(perfil: Perfil): boolean {
        if (this._repoPerfis.consultar(perfil.id, perfil.user, perfil.email) ){
            return false
        }
        this._repoPerfis.inserir(perfil);
        return true
    }

    public consultarPerfil(id?: number, user?: string, email?: string, senha?: string): Perfil | null {
        return this._repoPerfis.consultar(id, user, email, senha)
    }

    public logar(user: string, senha: string): Perfil | null {
        return this._repoPerfis.logar(user, senha)
    }

    public inserirPostagem(postagem: Postagem): boolean {
        if (this._repoPostagens.consultar(postagem.id) ){
            return false
        }
        this._repoPostagens.inserir(postagem);
        return true
    }

    public consultarPostagem(id?: number, texto?: string, hashtag?: string, perfil: Perfil | null = null): Postagem[] {
        return this._repoPostagens.consultar(id, texto, hashtag, perfil)
    }

    public curtir(idPost: number): void {
        const postagemEncontrada = this._repoPostagens.consultar(idPost)[0]

        if (postagemEncontrada) {
            postagemEncontrada.curtir()
        }
    }

    public descurtir(idPost: number): void {
        const postagemEncontrada = this._repoPostagens.consultar(idPost)[0]

        if (postagemEncontrada) {
            postagemEncontrada.descurtir()
        }
    }

    public decrementarVisualizacoes(post: PostagemAvancada): void {
        post.decrementarVisualizacoes()
    }

    public ehExibivel(post: PostagemAvancada): boolean {
        if (post.visualizacoesRestantes > 0) {
            return true
        }
        return false
    }

    public exibirPostPerfil(id: number): Postagem[] {
        const perfilEncontrado =  this._repoPerfis.consultar(id)

        let posts: Postagem[] = []

        if (perfilEncontrado) {
            for (let post of perfilEncontrado.postagens) {
                if (post instanceof PostagemAvancada) {
                    if (this.ehExibivel(post)) {
                        posts.push(post)
                        post.decrementarVisualizacoes()
                    }
                } else {
                    posts.push(post)
                }
            }
        }

        return posts
    }

    public exibirPostsPopulares(repoPostagens: IRepositorioDePostagens): Postagem[] { //Q.8 a)
        let posts: Postagem[] = []
        
        for (let post of repoPostagens.postagens) {
            if (post instanceof PostagemAvancada) {
                if (this.ehExibivel(post) && post.ehPopular()) {
                    posts.push(post)
                    post.decrementarVisualizacoes()
                }
            } 
        }

        return posts
    }

    public exibirPerfisPopulares(repoPerfis: IRepositorioDePerfis): Perfil[] { //func. adicional 1
        let perfis: Perfil[] = []

        for (let perfil of repoPerfis.perfis){
            let curtidas: number = 0
            let descurtidas: number = 0

            for (let post of perfil.postagens) {
                curtidas += post.curtidas
                descurtidas += post.descurtidas
            }

            if (curtidas == (descurtidas * 1.5)) {
                perfis.push(perfil)
            }
        }

        return perfis
    }

    //public exibirHashtagsPopulares(repoPostagens: IRepositorioDePostagens): string[] { }

    public bloquearPerfil(perfilBloqueando: Perfil, id?: number, user?: string, email?: string): boolean {
        let perfilBloqueado: Perfil | null = this.consultarPerfil(id, user, email)
        let encontrou: boolean = false

        if (perfilBloqueado != null) {
            for (let bloqueado of perfilBloqueando.bloqueados) {
               if (perfilBloqueado.id == bloqueado.id) {
                encontrou = true
               } 
            }
            if (!encontrou) {
                perfilBloqueando.bloquear(perfilBloqueado)
                return true
            }
        }

        return false
    }

    public desbloquearPerfil(perfilDesbloqueando: Perfil, id?: number, user?: string, email?: string): boolean {
        let perfilDesbloqueado: Perfil | null = this.consultarPerfil(id, user, email)
        let encontrou: boolean = false

        if (perfilDesbloqueado != null) {
            for (let bloqueado of perfilDesbloqueando.bloqueados) {
               if (perfilDesbloqueado.id == bloqueado.id) {
                encontrou = true
               } 
            }
            if (encontrou) {
                perfilDesbloqueando.desbloquear(perfilDesbloqueado)
                return true
            }
        }

        return false
    }

    public exibirPostAleatorio(repoPostagens: IRepositorioDePostagens): Postagem { //func. adicional que o rafael achou inutil
        let alcance: number = repoPostagens.postagens.length
        let idAleatorio = Math.floor(Math.random() * alcance) + 1
        
        for (let post of this.consultarPostagem(idAleatorio)) {
            if (post.id ==idAleatorio) {
                return post
            }
        }
        return this.consultarPostagem(idAleatorio)[0]
    }

    public exibirPerfisAtivos(repoPerfis: IRepositorioDePerfis, repoPostagens: IRepositorioDePostagens): Perfil[] { //func. adicional 3
        let perfis: Perfil[] = []
        let numDePostagens: number = repoPostagens.postagens.length
        let numDePerfis: number = repoPerfis.perfis.length
        let mediaPostagensPorPerfil: number = numDePostagens / numDePerfis

        for (let perfil of repoPerfis.perfis){
            if (perfil.postagens.length > mediaPostagensPorPerfil) {
                perfis.push(perfil)
            }
        }

        return perfis
    }

    //Não faço ideia de como consertar isso:
    public exibirPostsHashtag(hashtag: string): Postagem[] {
        const postsEncontrados = this._repoPostagens.postagens.filter((post) => {
            return (post instanceof PostagemAvancada) &&
                   (post.existeHashtag(hashtag))
        } ) 

        return postsEncontrados
    }
    //////////////////////////////////////////////////////////  

    public seguirPerfil(perfilSeguindo: Perfil, id?: number, user?: string, email?: string): boolean {
        let perfilSeguido: Perfil | null = this.consultarPerfil(id, user, email)
        let encontrou: boolean = false

        if (perfilSeguido != null) {
            for (let seguidor of perfilSeguido.seguidores) {
               if (seguidor.id == perfilSeguindo.id) {
                encontrou = true
               } 
            }
            if (!encontrou) {
                perfilSeguindo.seguir(perfilSeguido)
                return true
            }
        }

        return false
    }
    
    public desseguirPerfil(perfilDesseguindo: Perfil, id?: number, user?: string, email?: string): boolean {
        let perfilDesseguido: Perfil | null = this.consultarPerfil(id, user, email)
        let encontrou: boolean = false

        if (perfilDesseguido != null) {
            for (let seguidor of perfilDesseguido.seguidores) {
               if (seguidor.id == perfilDesseguindo.id) {
                encontrou = true
               } 
            }
            if (encontrou) {
                perfilDesseguindo.desseguir(perfilDesseguido)
                perfilDesseguido.removerSeguidor(perfilDesseguindo)
                return true
            }
        }

        return false
    }

    public exibirSeguidores(id?: number, user?: string, email?: string): Perfil[] {
        let perfil: Perfil | null = this.consultarPerfil(id, user, email)
        let seguidores: Perfil[] = []

        if (perfil != null) {
            for (let seguidor of perfil.seguidores) {
               seguidores.push(seguidor) 
            }
        }

        return seguidores
    }

    public exibirSeguindo(id?: number, user?: string, email?: string): Perfil[] {
        let perfil: Perfil | null = this.consultarPerfil(id, user, email)
        let seguindo: Perfil[] = []

        if (perfil != null) {
            for (let seguido of perfil.seguidos) {
               seguindo.push(seguido) 
            }
        }

        return seguindo
    }

    public exibirPostagensDoSeguidor(seguidor: Perfil): Postagem[] {
            const postagensOrdenadas = seguidor.postagens.sort((a, b) => b.data.getTime() - a.data.getTime());    
            return postagensOrdenadas;
    }
    

    public get repoPerfis() : IRepositorioDePerfis {
        return this._repoPerfis
    }
    
    public get repoPostagens() : IRepositorioDePostagens {
        return this._repoPostagens
    }
    
}
