import { AsyncLocalStorage } from "async_hooks";
import { Perfil } from "./perfil";
import { Postagem } from "./postagem";
import { PostagemAvancada } from "./postagem-avancada";
import { RepositorioDePerfis } from "./repositorio-perfis";
import { RepositorioDePostagens } from "./repositorio-postagens";

export class RedeSocial {
    private _repoPerfis: RepositorioDePerfis
    private _repoPostagens: RepositorioDePostagens

    constructor(repoPerfis: RepositorioDePerfis, repoPostagens: RepositorioDePostagens) {
        this._repoPerfis = repoPerfis
        this._repoPostagens = repoPostagens
    }

    public incluirPerfil(perfil: Perfil): boolean {
        let existe: boolean = false
        for (let i: number = 0; i < this._repoPerfis.perfis.length; i++) {
            if (this._repoPerfis.perfis[i].id == perfil.id) {
                existe = true
            }
        }

        if (!(existe) && perfil.user != undefined && perfil.email != undefined) {
            this._repoPerfis.incluir(perfil)
            return true
        }
        return false
    }   

    public consultarPerfil(id?: number, user?: string, email?: string): Perfil | null {
        return this._repoPerfis.consultar(id, user, email)
    }

    public incluirPostagem(postagem: Postagem): boolean {
        let existe: boolean = false
        for (let i: number = 0; i < this._repoPostagens.postagens.length; i++) {
            if (this.repoPostagens.postagens[i].id == postagem.id) {
                existe = true
            }
        }

        if (!(existe) && postagem.texto != undefined && postagem.perfil != undefined) {
            this._repoPostagens.incluir(postagem)
            return true
        }

        return false
    }

    public consultarPostagem(id?: number, texto?: string, hashtag?: string, perfil: Perfil | null = null): Postagem[] {
        return this._repoPostagens.consultar(id, texto, hashtag, perfil)
    }

    public curtir(idPost: number): void {
        const postagemEncontrada = this._repoPostagens.postagens.find((postagem) => {
            return (postagem.id == idPost)
        })

        if (postagemEncontrada) {
            postagemEncontrada.curtir()
        }
    }

    public descurtir(idPost: number): void {
        const postagemEncontrada = this._repoPostagens.postagens.find((postagem) => {
            return (postagem.id == idPost)
        })

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
        const perfilEncontrado = this._repoPerfis.perfis.find((perfil) => {
            return (perfil.id == id)
        } ) 

        let posts: Postagem[] = []

        if (perfilEncontrado) {
            for (let post of perfilEncontrado.postagens) {
                if (post instanceof PostagemAvancada) {
                    if (this.ehExibivel(post)) {          //Coloquei a verificação no método ehExibivel
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

    public exibirPostsPopulares(repoPostagens: RepositorioDePostagens) { //Q.8 a)
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

    public exibirPerfisPopulares(repoPerfis: RepositorioDePerfis): Perfil[] { //func. adicional 1
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

    public bloquearPerfil(repoPerfis: RepositorioDePerfis, perfilBloqueando: Perfil, idBloqueado: number): void { //func. adicional 2 
        for (let perfil of repoPerfis.perfis) {
            if (perfil.id == idBloqueado) {
                perfilBloqueando.bloqueados.push(perfil)
            }
        }
    }

    public exibirPostAleatorio(repoPostagens: RepositorioDePostagens): Postagem { //func. adicional que o rafael achou inutil
        let alcance: number = repoPostagens.postagens.length
        let idAleatorio = Math.floor(Math.random() * alcance) + 1
        
        for (let post of this.consultarPostagem(idAleatorio)) {
            if (post.id ==idAleatorio) {
                return post
            }
        }
        return this.consultarPostagem(idAleatorio)[0]
    }

    public exibirPerfisAtivos(repoPerfis: RepositorioDePerfis, repoPostagens: RepositorioDePostagens) { //func. adicional 3
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

    public exibirPostsHashtag(hashtag: string): Postagem[] {
        const postsEncontrados = this._repoPostagens.postagens.filter((post) => {
            return (post instanceof PostagemAvancada) &&
                   (post.existeHashtag(hashtag))
        } ) 

        return postsEncontrados
    }

    public get repoPerfis() : RepositorioDePerfis {
        return this._repoPerfis
    }
    
    public get repoPostagens() : RepositorioDePostagens {
        return this._repoPostagens
    }
    
}