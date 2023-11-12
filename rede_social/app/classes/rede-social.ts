import { Perfil } from "./perfil.js";
import { RepositorioDePerfis } from "./repositorio-perfis.js";
import { RepositorioDePostagens } from "./repositorio-postagens.js";
import { Postagem } from "./postagem.js";
import { PostagemAvancada } from "./postagem-avancada.js";

export class RedeSocial {
    private _repoPerfis: RepositorioDePerfis
    private _repoPostagens: RepositorioDePostagens

    constructor(repoPerfis: RepositorioDePerfis, repoPostagens: RepositorioDePostagens) {
        this._repoPerfis = repoPerfis
        this._repoPostagens = repoPostagens
    }

    public incluirPerfil(perfil: Perfil): void {
        if (perfil.id != undefined && perfil.user != undefined && perfil.email != undefined && !this._repoPerfis.consultar(perfil.id, perfil.user, perfil.email)) {
            this._repoPerfis.incluir(perfil)
        }
    }   

    public consultarPerfil(user: string, email?: string, id?: number): Perfil | null {
        return this._repoPerfis.consultar(id, user, email)
    }

    public incluirPostagem(postagem: Postagem){
        let idRepetido: boolean = false
        if (postagem.texto != null && postagem.id != null && postagem.perfil != null){
            for (let i = 0; i < this._repoPostagens.postagens.length; i++) {
                if (this._repoPostagens.postagens[i].id == postagem.id){
                    idRepetido = true
                }    
            }
        }
        if (idRepetido == false) {
            this._repoPostagens.incluir(postagem)
        }
        return null
    }

    public consultarPostagem(texto: string, hashtag?: string, perfil?: Perfil, id?: number): void {
        this._repoPostagens.consultar(texto, hashtag, perfil, id)
    }

    public curtir(idPostagem: number): void {
        let postagens = this._repoPostagens.postagens;
        for (let i = 0; i < postagens.length; i++) {
            if (postagens[i].id == idPostagem){
                postagens[i].curtir()
            }
        }
    }

    public descurtir(idPostagem: number): void {
        let postagens = this._repoPostagens.postagens;
        for (let i = 0; i < postagens.length; i++) {
            if (postagens[i].id == idPostagem){
                postagens[i].descurtir()
            }
        }
    }

    public decrementarVisualizacoes(postagem: PostagemAvancada): void {
        postagem.decrementarVisualizacoes()
    }

    public exibirPostagensPorPerfil(id: number): Postagem[] {
        let postagensExibidas!: Postagem[];
        let postagens = this._repoPostagens.postagens;
        let postagemAtual: Postagem;
        let postagemAvancadaAtual: PostagemAvancada;

        for (let i = 0; i < postagens.length; i++) {
            if (postagens[i].perfil.id == id){
                if (postagens[i] instanceof PostagemAvancada){
                    postagemAvancadaAtual = <PostagemAvancada> postagens[i]
                    this.decrementarVisualizacoes(postagemAvancadaAtual)
                    if (postagemAvancadaAtual.visualizacoesRestantes > 0){
                        postagensExibidas.push(postagemAvancadaAtual)
                    }
                }
                postagemAtual = postagens[i]
                postagensExibidas.push(postagemAtual)
            }
        }

        return postagensExibidas
    }

    public exibirPostagensPorHashtag(hashtag: string): Postagem[] {
        let postagensExibidas!: Postagem[];
        let postagens = this._repoPostagens.postagens;
        let postagemAvancadaAtual: PostagemAvancada;

        for (let i = 0; i < postagens.length; i++) {
            if (postagens[i] instanceof PostagemAvancada){
                if (postagens[i] instanceof PostagemAvancada){
                    postagemAvancadaAtual = <PostagemAvancada> postagens[i]
                    if (postagemAvancadaAtual.existeHashtag(hashtag)){
                    this.decrementarVisualizacoes(postagemAvancadaAtual)
                    if (postagemAvancadaAtual.visualizacoesRestantes > 0){
                        postagensExibidas.push(postagemAvancadaAtual)
                    }
                }
                }
            }
        }

        return postagensExibidas
    }

    public get repoPerfis() : RepositorioDePerfis {
        return this._repoPerfis
    }
    
    public get repoPostagens() : RepositorioDePostagens {
        return this._repoPostagens
    }
    
}