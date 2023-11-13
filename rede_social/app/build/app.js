"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const perfil_js_1 = require("./classes/perfil.js");
const postagem_js_1 = require("./classes/postagem.js");
const postagem_avancada_js_1 = require("./classes/postagem-avancada.js");
const rede_social_js_1 = require("./classes/rede-social.js");
const repositorio_perfis_js_1 = require("./classes/repositorio-perfis.js");
const repositorio_postagens_js_1 = require("./classes/repositorio-postagens.js");
const prompt_sync_1 = __importDefault(require("prompt-sync"));
let input = (0, prompt_sync_1.default)();
let idGlobal = 1;
let idPostGlobal = 1;
let perfilLogado;
const opcoesDeFormato = {
    hour12: true
};
class App {
    constructor(redeSocial) {
        this._redeSocial = redeSocial;
    }
    menu() {
        let opcao = 0;
        console.clear();
        console.log(`
            ███████████                ██████            ███████████                    █████     
            ░░███░░░░░███              ███░░███          ░░███░░░░░███                  ░░███      
             ░███    ░███   ██████    ░███ ░░░   ██████   ░███    ░███  ██████   ██████  ░███ █████
             ░██████████   ░░░░░███  ███████    ░░░░░███  ░██████████  ███░░███ ███░░███ ░███░░███ 
             ░███░░░░░███   ███████ ░░░███░      ███████  ░███░░░░░███░███ ░███░███ ░███ ░██████░  
             ░███    ░███  ███░░███   ░███      ███░░███  ░███    ░███░███ ░███░███ ░███ ░███░░███ 
             █████   █████░░████████  █████    ░░████████ ███████████ ░░██████ ░░██████  ████ █████
             ░░░░░   ░░░░░  ░░░░░░░░  ░░░░░      ░░░░░░░░ ░░░░░░░░░░░   ░░░░░░   ░░░░░░  ░░░░ ░░░░░
            \n
            ❖ MENU DE OPCOES ❖\n
            1. Login
            2. Feed
            3. Cadastrar Perfil
            4. Consultar Perfil
            5. Criar Postagem
            6. Consultar Postagem (ID)
            7. Consultar Postagens (Perfil)
            8. Consultar Postagens (Hashtags)
            9. Curtir
            10. Descurtir
            11. Exibir Perfis Populares
            12. Bloquear um Perfil
            13. Exibir Perfis Bloqueados
            14. Desbloquear um Perfil
            15. Exibir os Perfis Mais Ativos
            16. Seguir um Perfil
            17. Exibir Seguidores
            18. Exibir Postagem de um Seguidor
            19: Deixar de Seguir um Perfil
            0. Sair\n`);
        opcao = +input("Opcao: ");
        switch (opcao) {
            case 1:
                this.acessoAoPerfil();
                break;
            case 2:
                this.feed();
                break;
            case 3:
                this.cadastrarPerfil();
                break;
            case 4:
                this.consultarPerfil();
                break;
            case 5:
                this.criarPostagem();
                break;
            case 6:
                this.consultarPostId();
                break;
            case 7:
                this.consultarPorPerfil();
                break;
            case 8:
                this.consultarHashtag();
                break;
            case 9:
                this.curtir();
                break;
            case 10:
                this.descurtir();
                break;
            case 11:
                this.exibirPerfisPopulares();
                break;
            case 12:
                this.bloquearPerfil();
                break;
            case 13:
                this.exibirBloqueados();
                break;
            case 14:
                this.desbloquearPerfil();
                break;
            case 15:
                this.exibirPerfisAtivos();
            case 16:
                this.seguirPerfil();
                break;
            case 17:
                this.exibirSeguidores();
                break;
            case 18:
                this.exibirPostagensDoSeguidor();
            case 19:
                this.desseguirPerfil();
                break;
            default:
        }
        console.log("Aplicação encerrada");
    }
    consultarHashtag() {
        console.clear();
        console.log(`
        ███████████                ██████            ███████████                    █████     
        ░░███░░░░░███              ███░░███          ░░███░░░░░███                  ░░███      
         ░███    ░███   ██████    ░███ ░░░   ██████   ░███    ░███  ██████   ██████  ░███ █████
         ░██████████   ░░░░░███  ███████    ░░░░░███  ░██████████  ███░░███ ███░░███ ░███░░███ 
         ░███░░░░░███   ███████ ░░░███░      ███████  ░███░░░░░███░███ ░███░███ ░███ ░██████░  
         ░███    ░███  ███░░███   ░███      ███░░███  ░███    ░███░███ ░███░███ ░███ ░███░░███ 
         █████   █████░░████████  █████    ░░████████ ███████████ ░░██████ ░░██████  ████ █████
         ░░░░░   ░░░░░  ░░░░░░░░  ░░░░░      ░░░░░░░░ ░░░░░░░░░░░   ░░░░░░   ░░░░░░  ░░░░ ░░░░░
        \n
                                    ❖ CONSULTAR POST POR HASHTAG ❖\n`);
        let hash = input("      Hashtag: ");
        const postComHashtags = this._redeSocial.repoPostagens.postagens.filter((postagem) => {
            return (postagem instanceof postagem_avancada_js_1.PostagemAvancada) && (postagem.existeHashtag(hash));
        });
        let postagens = postComHashtags;
        for (let i = 0; i < postagens.length; i++) {
            let post = postagens[i];
            console.log(`
            \x1b[1m@${post.perfil.user}\x1b[0m\n
            ${post.data.toLocaleString('pt-BR', opcoesDeFormato)}\n
            ${this.quebrarTextoEmLinhas(post.texto, 50)}`);
            let hashtags = "";
            if (post instanceof postagem_avancada_js_1.PostagemAvancada) {
                for (let hash of post.hashtags) {
                    hashtags += "#" + hash + " ";
                }
                console.log(`\n            \x1b[94m${hashtags}\x1b[0m`);
                this._redeSocial.decrementarVisualizacoes(post);
            }
            console.log(`
            ▲ ${post.curtidas}    ▼ ${post.descurtidas}\n`);
        }
        input("\nPressione Enter para retornar ao menu...");
        this.menu();
    }
    consultarPorPerfil() {
        console.clear();
        console.log(`
        ███████████                ██████            ███████████                    █████     
        ░░███░░░░░███              ███░░███          ░░███░░░░░███                  ░░███      
         ░███    ░███   ██████    ░███ ░░░   ██████   ░███    ░███  ██████   ██████  ░███ █████
         ░██████████   ░░░░░███  ███████    ░░░░░███  ░██████████  ███░░███ ███░░███ ░███░░███ 
         ░███░░░░░███   ███████ ░░░███░      ███████  ░███░░░░░███░███ ░███░███ ░███ ░██████░  
         ░███    ░███  ███░░███   ░███      ███░░███  ░███    ░███░███ ░███░███ ░███ ░███░░███ 
         █████   █████░░████████  █████    ░░████████ ███████████ ░░██████ ░░██████  ████ █████
         ░░░░░   ░░░░░  ░░░░░░░░  ░░░░░      ░░░░░░░░ ░░░░░░░░░░░   ░░░░░░   ░░░░░░  ░░░░ ░░░░░
        \n
                                    ❖ CONSULTAR POST POR PERFIL ❖\n`);
        let user = input("      User: ");
        let perfil = this._redeSocial.consultarPerfil(undefined, user);
        let postagem = this._redeSocial.consultarPostagem(undefined, undefined, undefined, perfil);
        let postagens = postagem;
        for (let i = 0; i < postagens.length; i++) {
            let post = postagens[i];
            console.log(`
            \x1b[1m@${post.perfil.user}\x1b[0m\n
            ${post.data.toLocaleString('pt-BR', opcoesDeFormato)}\n
            ${this.quebrarTextoEmLinhas(post.texto, 50)}`);
            let hashtags = "";
            if (post instanceof postagem_avancada_js_1.PostagemAvancada) {
                for (let hash of post.hashtags) {
                    hashtags += "#" + hash + " ";
                }
                console.log(`\n            \x1b[94m${hashtags}\x1b[0m`);
                this._redeSocial.decrementarVisualizacoes(post);
            }
            console.log(`
            ▲ ${post.curtidas}    ▼ ${post.descurtidas}\n`);
        }
        input("\nPressione Enter para retornar ao menu...");
        this.menu();
    }
    consultarPostId() {
        console.clear();
        console.log(`
        ███████████                ██████            ███████████                    █████     
        ░░███░░░░░███              ███░░███          ░░███░░░░░███                  ░░███      
         ░███    ░███   ██████    ░███ ░░░   ██████   ░███    ░███  ██████   ██████  ░███ █████
         ░██████████   ░░░░░███  ███████    ░░░░░███  ░██████████  ███░░███ ███░░███ ░███░░███ 
         ░███░░░░░███   ███████ ░░░███░      ███████  ░███░░░░░███░███ ░███░███ ░███ ░██████░  
         ░███    ░███  ███░░███   ░███      ███░░███  ░███    ░███░███ ░███░███ ░███ ░███░░███ 
         █████   █████░░████████  █████    ░░████████ ███████████ ░░██████ ░░██████  ████ █████
         ░░░░░   ░░░░░  ░░░░░░░░  ░░░░░      ░░░░░░░░ ░░░░░░░░░░░   ░░░░░░   ░░░░░░  ░░░░ ░░░░░
        \n
                                    ❖ CONSULTAR POST POR ID ❖\n`);
        let id = +input("      Id: ");
        let postagem = this._redeSocial.consultarPostagem(id);
        let post = postagem[0];
        console.log(`
            \x1b[1m@${post.perfil.user}\x1b[0m\n
            ${post.data.toLocaleString('pt-BR', opcoesDeFormato)}\n
            ${this.quebrarTextoEmLinhas(post.texto, 50)}`);
        let hashtags = "";
        if (post instanceof postagem_avancada_js_1.PostagemAvancada) {
            for (let hash of post.hashtags) {
                hashtags += "#" + hash + " ";
            }
            console.log(`\n            \x1b[94m${hashtags}\x1b[0m`);
            this._redeSocial.decrementarVisualizacoes(post);
        }
        console.log(`
            ▲ ${post.curtidas}    ▼ ${post.descurtidas}\n`);
        input("\nPressione Enter para retornar ao menu...");
        this.menu();
    }
    criarPostagem() {
        console.clear();
        console.log(`
        ███████████                ██████            ███████████                    █████     
        ░░███░░░░░███              ███░░███          ░░███░░░░░███                  ░░███      
         ░███    ░███   ██████    ░███ ░░░   ██████   ░███    ░███  ██████   ██████  ░███ █████
         ░██████████   ░░░░░███  ███████    ░░░░░███  ░██████████  ███░░███ ███░░███ ░███░░███ 
         ░███░░░░░███   ███████ ░░░███░      ███████  ░███░░░░░███░███ ░███░███ ░███ ░██████░  
         ░███    ░███  ███░░███   ░███      ███░░███  ░███    ░███░███ ░███░███ ░███ ░███░░███ 
         █████   █████░░████████  █████    ░░████████ ███████████ ░░██████ ░░██████  ████ █████
         ░░░░░   ░░░░░  ░░░░░░░░  ░░░░░      ░░░░░░░░ ░░░░░░░░░░░   ░░░░░░   ░░░░░░  ░░░░ ░░░░░
        \n
                                        ❖ CRIAR POSTAGEM ❖\n`);
        let userPerfil = input("User: ");
        let perfil = this._redeSocial.consultarPerfil(undefined, userPerfil);
        let texto = input("Conteudo: ");
        let escolha = input("Adicionar hashtags (s/n): ");
        let id = idPostGlobal;
        idPostGlobal++;
        if (perfil) {
            if (escolha == 's' || escolha == 'S') {
                let postAvan = new postagem_avancada_js_1.PostagemAvancada(id, texto, 0, 0, new Date(), perfil, 100);
                this._redeSocial.incluirPostagem(postAvan);
                let hashtags = input("Digite a(s) hahstags que deseja adicionar (separadas por espaco: ");
                let arrayHashtags = hashtags.split(" ");
                for (let hash of arrayHashtags) {
                    postAvan.adicionarHashtags(hash);
                }
            }
            else {
                let post = new postagem_js_1.Postagem(id, texto, 0, 0, new Date(), perfil);
                this._redeSocial.incluirPostagem(post);
            }
            if (this._redeSocial.consultarPostagem(id)) {
                console.log("\nPostagem criada com sucesso!");
            }
            else {
                console.log("\nERRO! Falha na criacao.");
            }
        }
        else {
            console.log("\nERRO! Perfil inexistente, ou falha na criacao.");
        }
        input("\nPressione Enter para retornar ao menu...");
        this.menu();
    }
    cadastrarPerfil() {
        console.clear();
        console.log(`
        ███████████                ██████            ███████████                    █████     
        ░░███░░░░░███              ███░░███          ░░███░░░░░███                  ░░███      
         ░███    ░███   ██████    ░███ ░░░   ██████   ░███    ░███  ██████   ██████  ░███ █████
         ░██████████   ░░░░░███  ███████    ░░░░░███  ░██████████  ███░░███ ███░░███ ░███░░███ 
         ░███░░░░░███   ███████ ░░░███░      ███████  ░███░░░░░███░███ ░███░███ ░███ ░██████░  
         ░███    ░███  ███░░███   ░███      ███░░███  ░███    ░███░███ ░███░███ ░███ ░███░░███ 
         █████   █████░░████████  █████    ░░████████ ███████████ ░░██████ ░░██████  ████ █████
         ░░░░░   ░░░░░  ░░░░░░░░  ░░░░░      ░░░░░░░░ ░░░░░░░░░░░   ░░░░░░   ░░░░░░  ░░░░ ░░░░░
        \n
                                        ❖ CADASTRAR PERFIL ❖\n`);
        let user = input("      User: ");
        let email = input("      E-mail: ");
        let id = idGlobal;
        idGlobal++;
        if (this._redeSocial.incluirPerfil(new perfil_js_1.Perfil(id, user, email))) {
            console.log("\nPerfil cadastrado com sucesso!");
        }
        else {
            console.log("\nERRO! Perfil existente, ou falha no cadastro.");
        }
        input("\nPressione Enter para retornar ao menu...");
        this.menu();
    }
    consultarPerfil() {
        console.clear();
        console.log(`
        ███████████                ██████            ███████████                    █████     
        ░░███░░░░░███              ███░░███          ░░███░░░░░███                  ░░███      
         ░███    ░███   ██████    ░███ ░░░   ██████   ░███    ░███  ██████   ██████  ░███ █████
         ░██████████   ░░░░░███  ███████    ░░░░░███  ░██████████  ███░░███ ███░░███ ░███░░███ 
         ░███░░░░░███   ███████ ░░░███░      ███████  ░███░░░░░███░███ ░███░███ ░███ ░██████░  
         ░███    ░███  ███░░███   ░███      ███░░███  ░███    ░███░███ ░███░███ ░███ ░███░░███ 
         █████   █████░░████████  █████    ░░████████ ███████████ ░░██████ ░░██████  ████ █████
         ░░░░░   ░░░░░  ░░░░░░░░  ░░░░░      ░░░░░░░░ ░░░░░░░░░░░   ░░░░░░   ░░░░░░  ░░░░ ░░░░░
        \n
                                        ❖ CONSULTAR PERFIL ❖\n`);
        console.log("       Preencha os que quiser.\n");
        let id = +input("      Id: ");
        let user = input("      User: ");
        let email = input("      E-mail: ");
        let perfil = this._redeSocial.consultarPerfil(id, user, email);
        if (perfil) {
            console.log(`
        Perfil Encontrado:

        Id: ${perfil.id}
        User: ${perfil.user}
        E-mail: ${perfil.email}
            `);
        }
        else {
            console.log("\n     Perfil nao encontrado!");
        }
        input("\nPressione Enter para retornar ao menu...");
        this.menu();
    }
    feed() {
        console.clear();
        console.log(`
        ███████████                ██████            ███████████                    █████     
        ░░███░░░░░███              ███░░███          ░░███░░░░░███                  ░░███      
         ░███    ░███   ██████    ░███ ░░░   ██████   ░███    ░███  ██████   ██████  ░███ █████
         ░██████████   ░░░░░███  ███████    ░░░░░███  ░██████████  ███░░███ ███░░███ ░███░░███ 
         ░███░░░░░███   ███████ ░░░███░      ███████  ░███░░░░░███░███ ░███░███ ░███ ░██████░  
         ░███    ░███  ███░░███   ░███      ███░░███  ░███    ░███░███ ░███░███ ░███ ░███░░███ 
         █████   █████░░████████  █████    ░░████████ ███████████ ░░██████ ░░██████  ████ █████
         ░░░░░   ░░░░░  ░░░░░░░░  ░░░░░      ░░░░░░░░ ░░░░░░░░░░░   ░░░░░░   ░░░░░░  ░░░░ ░░░░░
        \n
                                            ❖ FEED ❖\n`);
        let postagens = this._redeSocial.repoPostagens.postagens;
        for (let i = 0; i < postagens.length; i++) {
            let post = postagens[i];
            console.log(`
            \x1b[1m@${post.perfil.user}\x1b[0m\n
            ${post.data.toLocaleString('pt-BR', opcoesDeFormato)}\n
            ${this.quebrarTextoEmLinhas(post.texto, 50)}`);
            let hashtags = "";
            if (post instanceof postagem_avancada_js_1.PostagemAvancada) {
                for (let hash of post.hashtags) {
                    hashtags += "#" + hash + " ";
                }
                console.log(`\n            \x1b[94m${hashtags}\x1b[0m`);
                this._redeSocial.decrementarVisualizacoes(post);
            }
            console.log(`
            ▲ ${post.curtidas}    ▼ ${post.descurtidas}\n`);
        }
        input("\n       Pressione Enter para retornar ao menu...");
        this.menu();
    }
    acessoAoPerfil() {
        console.log("       Preencha os que quiser para encontrar sua conta.\n");
        let id = +input("      Id: ");
        let user = input("      User: ");
        let email = input("      E-mail: ");
        let perfil = this._redeSocial.consultarPerfil(id, user, email);
        if (perfil) {
            console.log(`
        Perfil Encontrado:

        Id: ${perfil.id}
        User: ${perfil.user}
        E-mail: ${perfil.email}
            `);
            perfilLogado = perfil;
            console.log(`Agora você está logado como o user ${perfilLogado.user}.`);
        }
        else {
            console.log("\n     Perfil nao encontrado!");
        }
        input("\nPressione Enter para retornar ao menu...");
        this.menu();
    }
    curtir() {
        let id = +input("      Id: ");
        let postagem = this._redeSocial.consultarPostagem(id);
        let post = postagem[0];
        this._redeSocial.curtir(post.id);
        console.log('Você curtiu o seguinte post:');
        console.log(`
            \x1b[1m@${post.perfil.user}\x1b[0m\n
            ${post.data.toLocaleString('pt-BR', opcoesDeFormato)}\n
            ${this.quebrarTextoEmLinhas(post.texto, 50)}`);
        let hashtags = "";
        if (post instanceof postagem_avancada_js_1.PostagemAvancada) {
            for (let hash of post.hashtags) {
                hashtags += "#" + hash + " ";
            }
            console.log(`\n            \x1b[94m${hashtags}\x1b[0m`);
            this._redeSocial.decrementarVisualizacoes(post);
        }
        console.log(`
            ▲ ${post.curtidas}    ▼ ${post.descurtidas}\n`);
        input("\nPressione Enter para retornar ao menu...");
        this.menu();
    }
    descurtir() {
        let id = +input("      Id: ");
        let postagem = this._redeSocial.consultarPostagem(id);
        let post = postagem[0];
        this._redeSocial.descurtir(post.id);
        console.log('Você descurtiu o seguinte post:');
        console.log(`
            \x1b[1m@${post.perfil.user}\x1b[0m\n
            ${post.data.toLocaleString('pt-BR', opcoesDeFormato)}\n
            ${this.quebrarTextoEmLinhas(post.texto, 50)}`);
        let hashtags = "";
        if (post instanceof postagem_avancada_js_1.PostagemAvancada) {
            for (let hash of post.hashtags) {
                hashtags += "#" + hash + " ";
            }
            console.log(`\n            \x1b[94m${hashtags}\x1b[0m`);
            this._redeSocial.decrementarVisualizacoes(post);
        }
        console.log(`
            ▲ ${post.curtidas}    ▼ ${post.descurtidas}\n`);
        input("\nPressione Enter para retornar ao menu...");
        this.menu();
    }
    exibirPerfisPopulares() {
        let perfisPopulares = redeSocial.exibirPerfisPopulares(redeSocial.repoPerfis);
        console.log('Usuários populares: ');
        for (let perfil of perfisPopulares) {
            console.log(`ID: ${perfil.id}`);
            console.log(`User: ${perfil.user}`);
        }
        input("\nPressione Enter para retornar ao menu...");
        this.menu();
    }
    bloquearPerfil() {
        if (perfilLogado == null) {
            console.log("Você precisa estar logado para usar esta função! Logue e tente novamente.");
            input("\nPressione Enter para retornar ao menu...");
            this.menu();
        }
        console.log("       Preencha os que quiser para encontrar o perfil a bloquear.\n");
        let id = +input("      Id: ");
        let user = input("      User: ");
        let email = input("      E-mail: ");
        let perfilBloquear = this._redeSocial.consultarPerfil(id, user, email);
        if (perfilBloquear) {
            console.log(`
        Perfil Encontrado:

        Id: ${perfilBloquear.id}
        User: ${perfilBloquear.user}
        E-mail: ${perfilBloquear.email}
            `);
            perfilBloquear = perfilBloquear;
            redeSocial.bloquearPerfil(perfilLogado, perfilBloquear.id);
        }
        else {
            console.log("\n     Perfil nao encontrado!");
        }
        input("\nPressione Enter para retornar ao menu...");
        this.menu();
    }
    desbloquearPerfil() {
        if (perfilLogado == null) {
            console.log("Você precisa estar logado para usar esta função! Logue e tente novamente.");
            input("\nPressione Enter para retornar ao menu...");
            this.menu();
        }
        console.log("       Preencha os que quiser para encontrar o perfil a desbloquear.\n");
        let id = +input("      Id: ");
        let user = input("      User: ");
        let email = input("      E-mail: ");
        let perfilDesbloquear = this._redeSocial.consultarPerfil(id, user, email);
        if (perfilDesbloquear) {
            console.log(`
        Perfil Encontrado:

        Id: ${perfilDesbloquear.id}
        User: ${perfilDesbloquear.user}
        E-mail: ${perfilDesbloquear.email}
            `);
            perfilDesbloquear = perfilDesbloquear;
            redeSocial.desbloquearPerfil(perfilLogado, perfilDesbloquear.id);
        }
        else {
            console.log("\n     Perfil nao encontrado!");
        }
        input("\nPressione Enter para retornar ao menu...");
        this.menu();
    }
    exibirBloqueados() {
        if (perfilLogado == null) {
            console.log("Você precisa estar logado para usar esta função! Logue e tente novamente.");
            input("\nPressione Enter para retornar ao menu...");
            this.menu();
        }
        console.log('Perfis Bloqueados:');
        for (let bloqueado of perfilLogado.bloqueados) {
            console.log(`
            User Bloqueado: ${bloqueado.user}
                `);
        }
        input("\nPressione Enter para retornar ao menu...");
        this.menu();
    }
    exibirPerfisAtivos() {
        let perfisAtivos = redeSocial.exibirPerfisAtivos(redeSocial.repoPerfis, redeSocial.repoPostagens);
        for (let perfil of perfisAtivos) {
            console.log(`
            User Ativo: ${perfil.user}
                `);
        }
        input("\nPressione Enter para retornar ao menu...");
        this.menu();
    }
    seguirPerfil() {
        if (perfilLogado == null) {
            console.log("Você precisa estar logado para usar esta função! Logue e tente novamente.");
            input("\nPressione Enter para retornar ao menu...");
            this.menu();
        }
        console.log("       Preencha os que quiser para encontrar o perfil que deseja seguir.\n");
        let id = +input("      Id: ");
        let user = input("      User: ");
        let email = input("      E-mail: ");
        let perfilSeguir = this._redeSocial.consultarPerfil(id, user, email);
        if (perfilSeguir) {
            console.log(`
        Perfil Encontrado:

        Id: ${perfilSeguir.id}
        User: ${perfilSeguir.user}
        E-mail: ${perfilSeguir.email}
            `);
            perfilSeguir = perfilSeguir;
            redeSocial.seguirPerfil(perfilLogado, perfilSeguir.id);
        }
        else {
            console.log("\n     Perfil nao encontrado!");
        }
        input("\nPressione Enter para retornar ao menu...");
        this.menu();
    }
    exibirSeguidores() {
        if (perfilLogado == null) {
            console.log("Você precisa estar logado para usar esta função! Logue e tente novamente.");
            input("\nPressione Enter para retornar ao menu...");
            this.menu();
        }
        console.log('Perfis que o seguem:');
        for (let seguidor of perfilLogado.seguidores) {
            console.log(`
            User Bloqueado: ${seguidor.user}
                `);
        }
        input("\nPressione Enter para retornar ao menu...");
        this.menu();
    }
    exibirPostagensDoSeguidor() {
        if (perfilLogado == null) {
            console.log("Você precisa estar logado para usar esta função! Logue e tente novamente.");
            input("\nPressione Enter para retornar ao menu...");
            this.menu();
        }
        console.log("       Preencha os que quiser para encontrar o seguidor.\n");
        let id = +input("      Id: ");
        let user = input("      User: ");
        let email = input("      E-mail: ");
        let perfil = (this._redeSocial.consultarPerfil(id, user, email));
        let ehSeguidor = false;
        for (let seguidor of perfilLogado.seguidores) {
            if (seguidor.id == perfil.id) {
                ehSeguidor = true;
            }
        }
        if (perfil != null && ehSeguidor == true) {
            console.log(`
        Seguidor Encontrado:

        Id: ${perfil.id}
        User: ${perfil.user}
        E-mail: ${perfil.email}
            `);
            let postagensSeguidor = redeSocial.exibirPostagensDoSeguidor(perfil);
            console.log('Postagens do Seguidor:');
            for (let postagem of postagensSeguidor) {
                console.log(`
            Postagem: ${postagem.texto}
            User: ${postagem.perfil.user}
            Data: ${postagem.data}`);
                if (postagem instanceof postagem_avancada_js_1.PostagemAvancada) {
                    let postagemAvancada = postagem;
                    for (let hashtag of postagemAvancada.hashtags) {
                        console.log(`Hashtag: #${hashtag}`);
                    }
                }
            }
        }
        else {
            console.log("\n     Perfil nao encontrado ou nao é um dos seus seguidores!");
        }
        input("\nPressione Enter para retornar ao menu...");
        this.menu();
    }
    desseguirPerfil() {
        if (perfilLogado == null) {
            console.log("Você precisa estar logado para usar esta função! Logue e tente novamente.");
            input("\nPressione Enter para retornar ao menu...");
            this.menu();
        }
        console.log("       Preencha os que quiser para encontrar o perfil que deseja deixar de seguir.\n");
        let id = +input("      Id: ");
        let user = input("      User: ");
        let email = input("      E-mail: ");
        let perfilDesseguir = this._redeSocial.consultarPerfil(id, user, email);
        if (perfilDesseguir) {
            console.log(`
        Perfil Encontrado:

        Id: ${perfilDesseguir.id}
        User: ${perfilDesseguir.user}
        E-mail: ${perfilDesseguir.email}
            `);
            perfilDesseguir = perfilDesseguir;
            redeSocial.desseguirPerfil(perfilLogado, perfilDesseguir.id);
        }
        else {
            console.log("\n     Perfil nao encontrado!");
        }
        input("\nPressione Enter para retornar ao menu...");
        this.menu();
    }
    quebrarTextoEmLinhas(texto, maxCaracteresPorLinha) {
        const palavras = texto.split(' ');
        let linhaAtual = '';
        const linhas = [];
        for (const palavra of palavras) {
            if (linhaAtual.length + palavra.length + 1 <= maxCaracteresPorLinha) {
                linhaAtual += (linhaAtual.length > 0 ? ' ' : '') + palavra;
            }
            else {
                linhas.push(linhaAtual);
                linhaAtual = palavra;
            }
        }
        linhas.push(linhaAtual);
        return linhas.join('\n            ');
    }
}
let redeSocial = new rede_social_js_1.RedeSocial(new repositorio_perfis_js_1.RepositorioDePerfis, new repositorio_postagens_js_1.RepositorioDePostagens);
let app = new App(redeSocial);
app.menu();
