"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedeSocial = void 0;
const postagem_avancada_1 = require("./postagem-avancada");
class RedeSocial {
    constructor(repoPerfis, repoPostagens) {
        this._repoPerfis = repoPerfis;
        this._repoPostagens = repoPostagens;
    }
    incluirPerfil(perfil) {
        let existe = false;
        for (let i = 0; i < this._repoPerfis.perfis.length; i++) {
            if (this._repoPerfis.perfis[i].id == perfil.id) {
                existe = true;
            }
        }
        if (!(existe) && perfil.user != undefined && perfil.email != undefined) {
            this._repoPerfis.incluir(perfil);
            return true;
        }
        return false;
    }
    consultarPerfil(id, user, email, senha) {
        return this._repoPerfis.consultar(id, user, email, senha);
    }
    logar(user, senha) {
        return this._repoPerfis.logar(user, senha);
    }
    incluirPostagem(postagem) {
        let existe = false;
        for (let i = 0; i < this._repoPostagens.postagens.length; i++) {
            if (this.repoPostagens.postagens[i].id == postagem.id) {
                existe = true;
            }
        }
        if (!(existe) && postagem.texto != undefined && postagem.perfil != undefined) {
            this._repoPostagens.incluir(postagem);
            return true;
        }
        return false;
    }
    consultarPostagem(id, texto, hashtag, perfil = null) {
        return this._repoPostagens.consultar(id, texto, hashtag, perfil);
    }
    curtir(idPost) {
        const postagemEncontrada = this._repoPostagens.postagens.find((postagem) => {
            return (postagem.id == idPost);
        });
        if (postagemEncontrada) {
            postagemEncontrada.curtir();
        }
    }
    descurtir(idPost) {
        const postagemEncontrada = this._repoPostagens.postagens.find((postagem) => {
            return (postagem.id == idPost);
        });
        if (postagemEncontrada) {
            postagemEncontrada.descurtir();
        }
    }
    decrementarVisualizacoes(post) {
        post.decrementarVisualizacoes();
    }
    ehExibivel(post) {
        if (post.visualizacoesRestantes > 0) {
            return true;
        }
        return false;
    }
    exibirPostPerfil(id) {
        const perfilEncontrado = this._repoPerfis.perfis.find((perfil) => {
            return (perfil.id == id);
        });
        let posts = [];
        if (perfilEncontrado) {
            for (let post of perfilEncontrado.postagens) {
                if (post instanceof postagem_avancada_1.PostagemAvancada) {
                    if (this.ehExibivel(post)) {
                        posts.push(post);
                        post.decrementarVisualizacoes();
                    }
                }
                else {
                    posts.push(post);
                }
            }
        }
        return posts;
    }
    exibirPostsPopulares(repoPostagens) {
        let posts = [];
        for (let post of repoPostagens.postagens) {
            if (post instanceof postagem_avancada_1.PostagemAvancada) {
                if (this.ehExibivel(post) && post.ehPopular()) {
                    posts.push(post);
                    post.decrementarVisualizacoes();
                }
            }
        }
        return posts;
    }
    exibirPerfisPopulares(repoPerfis) {
        let perfis = [];
        for (let perfil of repoPerfis.perfis) {
            let curtidas = 0;
            let descurtidas = 0;
            for (let post of perfil.postagens) {
                curtidas += post.curtidas;
                descurtidas += post.descurtidas;
            }
            if (curtidas == (descurtidas * 1.5)) {
                perfis.push(perfil);
            }
        }
        return perfis;
    }
    //public exibirHashtagsPopulares(repoPostagens: IRepositorioDePostagens): string[] { }
    bloquearPerfil(perfilBloqueando, id, user, email) {
        let perfilBloqueado = this.consultarPerfil(id, user, email);
        if (perfilBloqueado != null) {
            perfilBloqueando.bloquear(perfilBloqueado);
        }
    }
    desbloquearPerfil(perfilDesbloqueando, id, user, email) {
        let perfilDesbloqueado = this.consultarPerfil(id, user, email);
        let encontrou = false;
        if (perfilDesbloqueado != null) {
            for (let bloqueado of perfilDesbloqueando.bloqueados) {
                if (perfilDesbloqueado.id == bloqueado.id) {
                    encontrou = true;
                }
            }
            if (encontrou) {
                perfilDesbloqueando.desbloquear(perfilDesbloqueado);
                return true;
            }
        }
        return false;
    }
    exibirPostAleatorio(repoPostagens) {
        let alcance = repoPostagens.postagens.length;
        let idAleatorio = Math.floor(Math.random() * alcance) + 1;
        for (let post of this.consultarPostagem(idAleatorio)) {
            if (post.id == idAleatorio) {
                return post;
            }
        }
        return this.consultarPostagem(idAleatorio)[0];
    }
    exibirPerfisAtivos(repoPerfis, repoPostagens) {
        let perfis = [];
        let numDePostagens = repoPostagens.postagens.length;
        let numDePerfis = repoPerfis.perfis.length;
        let mediaPostagensPorPerfil = numDePostagens / numDePerfis;
        for (let perfil of repoPerfis.perfis) {
            if (perfil.postagens.length > mediaPostagensPorPerfil) {
                perfis.push(perfil);
            }
        }
        return perfis;
    }
    exibirPostsHashtag(hashtag) {
        const postsEncontrados = this._repoPostagens.postagens.filter((post) => {
            return (post instanceof postagem_avancada_1.PostagemAvancada) &&
                (post.existeHashtag(hashtag));
        });
        return postsEncontrados;
    }
    seguirPerfil(perfilSeguindo, id, user, email) {
        let perfilSeguido = this.consultarPerfil(id, user, email);
        if (perfilSeguido != null) {
            perfilSeguindo.seguir(perfilSeguido);
        }
    }
    desseguirPerfil(perfilDesseguindo, id, user, email) {
        let perfilDesseguido = this.consultarPerfil(id, user, email);
        if (perfilDesseguido != null) {
            perfilDesseguindo.desseguir(perfilDesseguido);
            perfilDesseguido.removerSeguidor(perfilDesseguindo);
        }
        return false;
    }
    exibirSeguidores(id, user, email) {
        let perfil = this.consultarPerfil(id, user, email);
        let seguidores = [];
        if (perfil != null) {
            for (let seguidor of perfil.seguidores) {
                seguidores.push(seguidor);
            }
        }
        return seguidores;
    }
    exibirSeguindo(id, user, email) {
        let perfil = this.consultarPerfil(id, user, email);
        let seguindo = [];
        if (perfil != null) {
            for (let seguido of perfil.seguidos) {
                seguindo.push(seguido);
            }
        }
        return seguindo;
    }
    exibirPostagensDoSeguidor(seguidor) {
        const postagensOrdenadas = seguidor.postagens.sort((a, b) => b.data.getTime() - a.data.getTime());
        return postagensOrdenadas;
    }
    get repoPerfis() {
        return this._repoPerfis;
    }
    get repoPostagens() {
        return this._repoPostagens;
    }
}
exports.RedeSocial = RedeSocial;
