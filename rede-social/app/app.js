"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var console_1 = require("console");
var perfil_1 = require("./classes/perfil");
var postagem_1 = require("./classes/postagem");
var postagem_avancada_1 = require("./classes/postagem-avancada");
var rede_social_1 = require("./classes/rede-social");
var repositorio_perfis_1 = require("./classes/repositorio-perfis");
var repositorio_postagens_1 = require("./classes/repositorio-postagens");
var prompt_sync_1 = require("prompt-sync");
//import * as fs from 'fs-extra'
var input = (0, prompt_sync_1.default)();
var idGlobal = 1;
var idPostGlobal = 1;
var perfilLogado;
var isLogado = false;
var opcoesDeFormato = {
    hour12: true
};
var App = /** @class */ (function () {
    function App(redeSocial) {
        this._redeSocial = redeSocial;
    }
    App.prototype.titulo = function () {
        (0, console_1.clear)();
        console.log("\n            \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588                \u2588\u2588\u2588\u2588\u2588\u2588            \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588                    \u2588\u2588\u2588\u2588\u2588     \n            \u2591\u2591\u2588\u2588\u2588\u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2588              \u2588\u2588\u2588\u2591\u2591\u2588\u2588\u2588          \u2591\u2591\u2588\u2588\u2588\u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2588                  \u2591\u2591\u2588\u2588\u2588      \n             \u2591\u2588\u2588\u2588    \u2591\u2588\u2588\u2588   \u2588\u2588\u2588\u2588\u2588\u2588    \u2591\u2588\u2588\u2588 \u2591\u2591\u2591   \u2588\u2588\u2588\u2588\u2588\u2588   \u2591\u2588\u2588\u2588    \u2591\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588\u2588   \u2588\u2588\u2588\u2588\u2588\u2588  \u2591\u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2588\n             \u2591\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588   \u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588\u2588\u2588    \u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2588  \u2591\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2591\u2591\u2588\u2588\u2588 \u2588\u2588\u2588\u2591\u2591\u2588\u2588\u2588 \u2591\u2588\u2588\u2588\u2591\u2591\u2588\u2588\u2588 \n             \u2591\u2588\u2588\u2588\u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2588   \u2588\u2588\u2588\u2588\u2588\u2588\u2588 \u2591\u2591\u2591\u2588\u2588\u2588\u2591      \u2588\u2588\u2588\u2588\u2588\u2588\u2588  \u2591\u2588\u2588\u2588\u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2588\u2591\u2588\u2588\u2588 \u2591\u2588\u2588\u2588\u2591\u2588\u2588\u2588 \u2591\u2588\u2588\u2588 \u2591\u2588\u2588\u2588\u2588\u2588\u2588\u2591  \n             \u2591\u2588\u2588\u2588    \u2591\u2588\u2588\u2588  \u2588\u2588\u2588\u2591\u2591\u2588\u2588\u2588   \u2591\u2588\u2588\u2588      \u2588\u2588\u2588\u2591\u2591\u2588\u2588\u2588  \u2591\u2588\u2588\u2588    \u2591\u2588\u2588\u2588\u2591\u2588\u2588\u2588 \u2591\u2588\u2588\u2588\u2591\u2588\u2588\u2588 \u2591\u2588\u2588\u2588 \u2591\u2588\u2588\u2588\u2591\u2591\u2588\u2588\u2588 \n             \u2588\u2588\u2588\u2588\u2588   \u2588\u2588\u2588\u2588\u2588\u2591\u2591\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588    \u2591\u2591\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 \u2591\u2591\u2588\u2588\u2588\u2588\u2588\u2588 \u2591\u2591\u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2588\n             \u2591\u2591\u2591\u2591\u2591   \u2591\u2591\u2591\u2591\u2591  \u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591  \u2591\u2591\u2591\u2591\u2591      \u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591 \u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591   \u2591\u2591\u2591\u2591\u2591\u2591   \u2591\u2591\u2591\u2591\u2591\u2591  \u2591\u2591\u2591\u2591 \u2591\u2591\u2591\u2591\u2591\n            \n");
    };
    App.prototype.acessarApp = function () {
        //carregar()
        var opcao = 0;
        this.titulo();
        console.log("\n            \u2756 MENU DE OPCOES \u2756\n\n            1. Login\n            2. Cadastrar-se\n            \n            0. Sair\n");
        try {
            opcao = +input("            Opcao: ");
            switch (opcao) {
                case 1:
                    this.login();
                    break;
                case 2:
                    this.cadastrarPerfil();
                    break;
                case 0:
                    //salvar()
                    break;
                default:
                    this.acessarApp();
                    break;
            }
        }
        catch (e) {
            console.log(e.message);
        }
        finally {
            input("Operação finalizada. Digite 0 para sair.");
        }
    };
    App.prototype.login = function () {
        this.titulo();
        console.log("\n        \u2756 LOGIN \u2756\n");
        var user = input("          User: ");
        var senha = input("          Senha: ");
        var perfil = this._redeSocial.logar(user, senha);
        if (perfil) {
            perfilLogado = perfil;
            isLogado = true;
            console.log("\n          Agora voc\u00EA est\u00E1 logado como o user ".concat(perfilLogado.user, "."));
            input("\n          Pressione Enter para retornar ao menu...");
            this.menu();
        }
        else {
            console.log("\n          Usuario ou senha incorretos!");
            input("\n          Pressione Enter para retornar ao menu...");
            this.acessarApp();
        }
    };
    App.prototype.consultar = function () {
        this.titulo();
        console.log("\n        \u2756 CONSULTA \u2756\n\n        \n        Use os atalhos para busca:\n        \n        - Para pesquisar perfis, utilize (@) antes do usuario\n        - Para pesquisar postagens por hahstags, utilize (#) antes da hahstag\n");
        var busca = input("          | ");
        if (/^@/.test(busca)) {
            var user = busca.substring(1);
            var perfil = this._redeSocial.consultarPerfil(undefined, user);
            if (perfil) {
                console.log("\n            Perfil Encontrado:\n\n            Id: ".concat(perfil.id, "\n            User: ").concat(perfil.user, "\n            E-mail: ").concat(perfil.email, "\n                "));
            }
            else {
                console.log("\n     Perfil nao encontrado!");
            }
            input("\n          Pressione Enter para retornar ao menu...");
            this.menu();
        }
        else if (/^#/.test(busca)) {
            var hashtag = busca.substring(1);
            this.consultarHashtag(hashtag);
            input("\n          Pressione Enter para retornar ao menu...");
            this.menu();
        }
        else {
        }
    };
    App.prototype.menu = function () {
        var opcao = 0;
        this.titulo();
        console.log("\n            \u2756 MENU DE OPCOES \u2756\n\n            01. Feed\n            02. Consultar\n            03. Criar Postagem\n            04. Exibir Perfis Populares\n            05. Exibir Posts Populares\n\n            \u2756 PERFIL \u2756\n\n            06. Bloquear um Perfil\n            07. Exibir Perfis Bloqueados\n            08. Desbloquear um Perfil\n            09. Exibir os Perfis Mais Ativos\n            10. Seguir um Perfil\n            11. Exibir Seguidores\n            12. Exibir Perfis que voc\u00EA Segue\n            13: Deixar de Seguir um Perfil\n\n            \u2756 RECURSOS SOLICITADOS \u2756\n\n            14. Consultar Perfil\n            15. Consultar Postagem (ID)\n            16. Consultar Postagens (Perfil)\n            17. Curtir\n            18. Descurtir\n            19. Exibir Hashtags Populares\n\n            \u2756 AVANCADO \u2756\n\n            0. Sair\n");
        try {
            opcao = +input("Opcao: ");
            switch (opcao) {
                case 1:
                    this.feed();
                    break;
                case 2:
                    this.consultar();
                    break;
                case 3:
                    this.criarPostagem();
                    break;
                case 4:
                    this.exibirPerfisPopulares();
                    break;
                case 5:
                    this.exibirPostsPopulares();
                    break;
                case 6:
                    this.bloquearPerfil();
                    break;
                case 7:
                    this.exibirBloqueados();
                    break;
                case 8:
                    this.desbloquearPerfil();
                    break;
                case 9:
                    this.exibirPerfisAtivos();
                    break;
                case 10:
                    this.seguirPerfil();
                    break;
                case 11:
                    this.exibirSeguidores();
                    break;
                case 12:
                    this.exibirSeguindo();
                    break;
                case 13:
                    this.desseguirPerfil();
                    break;
                case 14:
                    this.consultarPerfil();
                    break;
                case 15:
                    this.consultarPostId();
                    break;
                case 16:
                    this.consultarPorPerfil();
                    break;
                case 17:
                    this.curtir();
                    break;
                case 18:
                    this.descurtir();
                    break;
                case 19:
                    this.exibirHashtagsPopulares();
                    break;
                case 0:
                    this.acessarApp();
                    break;
                default:
                    this.menu();
                    break;
            }
        }
        catch (e) {
            console.log(e.message);
        }
        finally {
            input("Operação finalizada. Digite 0 para sair.");
        }
    };
    App.prototype.exibirPostsPopulares = function () {
        this.titulo();
        console.log("\n        \u2756 POSTS POPULARES \u2756\n");
        var postsPopulares = redeSocial.exibirPostsPopulares(redeSocial.repoPostagens);
        for (var _i = 0, postsPopulares_1 = postsPopulares; _i < postsPopulares_1.length; _i++) {
            var post = postsPopulares_1[_i];
            console.log("\n            \u001B[1m@".concat(post.perfil.user, "\u001B[0m\n\n            ").concat(post.data.toLocaleString('pt-BR', opcoesDeFormato), "\n\n            ").concat(this.quebrarTextoEmLinhas(post.texto, 50)));
            var hashtags = "";
            if (post instanceof postagem_avancada_1.PostagemAvancada) {
                for (var _a = 0, _b = post.hashtags; _a < _b.length; _a++) {
                    var hash = _b[_a];
                    hashtags += "#" + hash + " ";
                }
                console.log("\n            \u001B[94m".concat(hashtags, "\u001B[0m"));
                this._redeSocial.decrementarVisualizacoes(post);
            }
            console.log("\n            \u25B2 ".concat(post.curtidas, "    \u25BC ").concat(post.descurtidas, "\n"));
        }
        input("\nPressione Enter para retornar ao menu...");
        this.menu();
    };
    App.prototype.consultarHashtag = function (hash) {
        this.titulo();
        console.log("\n        \u2756 CONSULTAR POST POR HASHTAG \u2756\n");
        //Erro
        var postComHashtags = this._redeSocial.repoPostagens.postagens.filter(function (postagem) {
            return (postagem instanceof postagem_avancada_1.PostagemAvancada) && (postagem.existeHashtag(hash));
        });
        var postagens = postComHashtags;
        for (var i = 0; i < postagens.length; i++) {
            var post = postagens[i];
            console.log("\n            \u001B[1m@".concat(post.perfil.user, "\u001B[0m\n\n            ").concat(post.data.toLocaleString('pt-BR', opcoesDeFormato), "\n\n            ").concat(this.quebrarTextoEmLinhas(post.texto, 50)));
            var hashtags = "";
            if (post instanceof postagem_avancada_1.PostagemAvancada) {
                for (var _i = 0, _a = post.hashtags; _i < _a.length; _i++) {
                    var hash_1 = _a[_i];
                    hashtags += "#" + hash_1 + " ";
                }
                console.log("\n            \u001B[94m".concat(hashtags, "\u001B[0m"));
                this._redeSocial.decrementarVisualizacoes(post);
            }
            console.log("\n            \u25B2 ".concat(post.curtidas, "    \u25BC ").concat(post.descurtidas, "\n"));
        }
        input("\nPressione Enter para retornar ao menu...");
        this.menu();
    };
    App.prototype.consultarPorPerfil = function () {
        this.titulo();
        console.log("\n        \u2756 CONSULTAR POST POR PERFIL \u2756\n");
        var user = input("      User: ");
        var perfil = this._redeSocial.consultarPerfil(undefined, user);
        var postagem = this._redeSocial.consultarPostagem(undefined, undefined, undefined, perfil);
        var postagens = postagem;
        for (var i = 0; i < postagens.length; i++) {
            var post = postagens[i];
            console.log("\n            \u001B[1m@".concat(post.perfil.user, "\u001B[0m\n\n            ").concat(post.data.toLocaleString('pt-BR', opcoesDeFormato), "\n\n            ").concat(this.quebrarTextoEmLinhas(post.texto, 50)));
            var hashtags = "";
            if (post instanceof postagem_avancada_1.PostagemAvancada) {
                for (var _i = 0, _a = post.hashtags; _i < _a.length; _i++) {
                    var hash = _a[_i];
                    hashtags += "#" + hash + " ";
                }
                console.log("\n            \u001B[94m".concat(hashtags, "\u001B[0m"));
                this._redeSocial.decrementarVisualizacoes(post);
            }
            console.log("\n            \u25B2 ".concat(post.curtidas, "    \u25BC ").concat(post.descurtidas, "\n"));
        }
        input("\nPressione Enter para retornar ao menu...");
        this.menu();
    };
    App.prototype.consultarPostId = function () {
        this.titulo();
        console.log("\n        \u2756 CONSULTAR POST POR ID \u2756\n");
        var id = +input("      Id: ");
        var postagem = this._redeSocial.consultarPostagem(id);
        if (postagem[0] != undefined) {
            var post = postagem[0];
            console.log("\n            \u001B[1m@".concat(post.perfil.user, "\u001B[0m\n\n            ").concat(post.data.toLocaleString('pt-BR', opcoesDeFormato), "\n\n            ").concat(this.quebrarTextoEmLinhas(post.texto, 50)));
            var hashtags = "";
            if (post instanceof postagem_avancada_1.PostagemAvancada) {
                for (var _i = 0, _a = post.hashtags; _i < _a.length; _i++) {
                    var hash = _a[_i];
                    hashtags += "#" + hash + " ";
                }
                console.log("\n            \u001B[94m".concat(hashtags, "\u001B[0m"));
                this._redeSocial.decrementarVisualizacoes(post);
            }
            console.log("\n            \u25B2 ".concat(post.curtidas, "    \u25BC ").concat(post.descurtidas, "\n"));
        }
        else {
            console.log("Postagem inexistente.");
        }
        input("\nPressione Enter para retornar ao menu...");
        this.menu();
    };
    App.prototype.criarPostagem = function () {
        this.titulo();
        console.log("\n        \u2756 CRIAR POSTAGEM \u2756\n");
        var texto = input("Conteudo: ");
        var escolha = input("Adicionar hashtags (s/n): ");
        var id = idPostGlobal;
        idPostGlobal++;
        if (perfilLogado) {
            if (escolha == 's' || escolha == 'S') {
                var postAvan = new postagem_avancada_1.PostagemAvancada(id, texto, 0, 0, new Date(), perfilLogado, 100);
                this._redeSocial.inserirPostagem(postAvan);
                var hashtags = input("Digite a(s) hahstags que deseja adicionar (separadas por espaco: ");
                var arrayHashtags = hashtags.split(" ");
                for (var _i = 0, arrayHashtags_1 = arrayHashtags; _i < arrayHashtags_1.length; _i++) {
                    var hash = arrayHashtags_1[_i];
                    postAvan.adicionarHashtags(hash);
                }
            }
            else {
                var post = new postagem_1.Postagem(id, texto, 0, 0, new Date(), perfilLogado);
                this._redeSocial.inserirPostagem(post);
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
    };
    App.prototype.cadastrarPerfil = function () {
        this.titulo();
        console.log("\n        \u2756 CADASTRAR PERFIL \u2756\n");
        var user = input("          User: ");
        var email = input("          E-mail: ");
        var senha = input("          Senha: ");
        var id = idGlobal;
        idGlobal++;
        if (this._redeSocial.inserirPerfil(new perfil_1.Perfil(id, user, email, senha))) {
            console.log("\n     Perfil cadastrado com sucesso!");
        }
        else {
            console.log("\n     ERRO! Perfil existente, ou falha no cadastro.");
        }
        input("\n     Pressione Enter para retornar ao menu...");
        this.acessarApp();
    };
    App.prototype.consultarPerfil = function () {
        this.titulo();
        console.log("\n        \u2756 CONSULTAR PERFIL \u2756\n");
        console.log("       Preencha os que quiser.\n");
        var id = +input("      Id: ");
        var user = input("      User: ");
        var email = input("      E-mail: ");
        var perfil = this._redeSocial.consultarPerfil(id, user, email);
        if (perfil) {
            console.log("\n        Perfil Encontrado:\n\n        Id: ".concat(perfil.id, "\n        User: ").concat(perfil.user, "\n        E-mail: ").concat(perfil.email, "\n            "));
        }
        else {
            console.log("\n     Perfil nao encontrado!");
        }
        input("\nPressione Enter para retornar ao menu...");
        this.menu();
    };
    App.prototype.feed = function () {
        this.titulo();
        console.log("\n        \u2756 FEED \u2756\n");
        //Erro
        var postagens = this._redeSocial.repoPostagens.postagens;
        for (var i = 0; i < postagens.length; i++) {
            var post = postagens[i];
            console.log("\n            \u001B[1m@".concat(post.perfil.user, "\u001B[0m\n\n            ").concat(post.data.toLocaleString('pt-BR', opcoesDeFormato), "\n\n            ").concat(this.quebrarTextoEmLinhas(post.texto, 50)));
            var hashtags = "";
            if (post instanceof postagem_avancada_1.PostagemAvancada) {
                for (var _i = 0, _a = post.hashtags; _i < _a.length; _i++) {
                    var hash = _a[_i];
                    hashtags += "#" + hash + " ";
                }
                console.log("\n            \u001B[94m".concat(hashtags, "\u001B[0m"));
                this._redeSocial.decrementarVisualizacoes(post);
            }
            console.log("\n            \u25B2 ".concat(post.curtidas, "    \u25BC ").concat(post.descurtidas, "\n"));
        }
        input("\n       Pressione Enter para retornar ao menu...");
        this.menu();
    };
    App.prototype.curtir = function () {
        this.titulo();
        console.log("\n        \u2756 CURTIR POST \u2756\n");
        var id = +input("      Id: ");
        var postagem = this._redeSocial.consultarPostagem(id);
        if (postagem[0] != null) {
            var post = postagem[0];
            this._redeSocial.curtir(post.id);
            console.log('Você curtiu o seguinte post:');
            console.log("\n                \u001B[1m@".concat(post.perfil.user, "\u001B[0m\n\n                ").concat(post.data.toLocaleString('pt-BR', opcoesDeFormato), "\n\n                ").concat(this.quebrarTextoEmLinhas(post.texto, 50)));
            var hashtags = "";
            if (post instanceof postagem_avancada_1.PostagemAvancada) {
                for (var _i = 0, _a = post.hashtags; _i < _a.length; _i++) {
                    var hash = _a[_i];
                    hashtags += "#" + hash + " ";
                }
                console.log("\n            \u001B[94m".concat(hashtags, "\u001B[0m"));
                this._redeSocial.decrementarVisualizacoes(post);
            }
            console.log("\n                \u25B2 ".concat(post.curtidas, "    \u25BC ").concat(post.descurtidas, "\n"));
        }
        else {
            console.log("Postagem inexistente.");
        }
        input("\nPressione Enter para retornar ao menu...");
        this.menu();
    };
    App.prototype.descurtir = function () {
        this.titulo();
        console.log("\n        \u2756 DESCURTIR POST \u2756\n");
        var id = +input("      Id: ");
        var postagem = this._redeSocial.consultarPostagem(id);
        if (postagem[0] != undefined) {
            var post = postagem[0];
            this._redeSocial.descurtir(post.id);
            console.log('Você descurtiu o seguinte post:');
            console.log("\n                \u001B[1m@".concat(post.perfil.user, "\u001B[0m\n\n                ").concat(post.data.toLocaleString('pt-BR', opcoesDeFormato), "\n\n                ").concat(this.quebrarTextoEmLinhas(post.texto, 50)));
            var hashtags = "";
            if (post instanceof postagem_avancada_1.PostagemAvancada) {
                for (var _i = 0, _a = post.hashtags; _i < _a.length; _i++) {
                    var hash = _a[_i];
                    hashtags += "#" + hash + " ";
                }
                console.log("\n            \u001B[94m".concat(hashtags, "\u001B[0m"));
                this._redeSocial.decrementarVisualizacoes(post);
            }
            console.log("\n                \u25B2 ".concat(post.curtidas, "    \u25BC ").concat(post.descurtidas, "\n"));
        }
        else {
            console.log("Postagem inexistente.");
        }
        input("\nPressione Enter para retornar ao menu...");
        this.menu();
    };
    App.prototype.exibirPerfisPopulares = function () {
        this.titulo();
        console.log("\n        \u2756 PERFIS POPULARES \u2756\n");
        var perfisPopulares = redeSocial.exibirPerfisPopulares(redeSocial.repoPerfis);
        for (var _i = 0, perfisPopulares_1 = perfisPopulares; _i < perfisPopulares_1.length; _i++) {
            var perfil = perfisPopulares_1[_i];
            console.log("ID: ".concat(perfil.id));
            console.log("User: ".concat(perfil.user));
        }
        input("\nPressione Enter para retornar ao menu...");
        this.menu();
    };
    App.prototype.bloquearPerfil = function () {
        this.titulo();
        console.log("\n        \u2756 BLOQUEAR PERFIL \u2756\n");
        console.log("       Preencha o usuario do perfil que deseja bloquear.\n");
        var user = input("      User: ");
        var perfilBloquear = this._redeSocial.consultarPerfil(undefined, user);
        if (perfilBloquear) {
            console.log("\n        Perfil Encontrado:\n\n        Id: ".concat(perfilBloquear.id, "\n        User: ").concat(perfilBloquear.user, "\n        E-mail: ").concat(perfilBloquear.email, "\n            "));
            perfilBloquear = perfilBloquear;
            redeSocial.bloquearPerfil(perfilLogado, perfilBloquear.id);
        }
        else {
            console.log("\n     Perfil nao encontrado!");
        }
        input("\nPressione Enter para retornar ao menu...");
        this.menu();
    };
    App.prototype.desbloquearPerfil = function () {
        this.titulo();
        console.log("\n        \u2756 DESBLOQUEAR PERFIL \u2756\n");
        console.log("       Preencha o usuario do perfil que deseja desbloquear.\n");
        var user = input("      User: ");
        var perfilDesbloquear = this._redeSocial.consultarPerfil(undefined, user);
        if (perfilDesbloquear) {
            console.log("\n        Perfil Encontrado:\n\n        Id: ".concat(perfilDesbloquear.id, "\n        User: ").concat(perfilDesbloquear.user, "\n        E-mail: ").concat(perfilDesbloquear.email, "\n            "));
            perfilDesbloquear = perfilDesbloquear;
            redeSocial.desbloquearPerfil(perfilLogado, perfilDesbloquear.id);
        }
        else {
            console.log("\n     Perfil nao encontrado!");
        }
        input("\nPressione Enter para retornar ao menu...");
        this.menu();
    };
    App.prototype.exibirBloqueados = function () {
        this.titulo();
        console.log("\n        \u2756 PERFIS BLOQUEADOS \u2756\n");
        for (var _i = 0, _a = perfilLogado.bloqueados; _i < _a.length; _i++) {
            var bloqueado = _a[_i];
            console.log("\n            User Bloqueado: ".concat(bloqueado.user, "\n                "));
        }
        input("\nPressione Enter para retornar ao menu...");
        this.menu();
    };
    App.prototype.exibirPerfisAtivos = function () {
        this.titulo();
        console.log("\n        \u2756 PERFIS ATIVOS \u2756\n");
        var perfisAtivos = redeSocial.exibirPerfisAtivos(redeSocial.repoPerfis, redeSocial.repoPostagens);
        for (var _i = 0, perfisAtivos_1 = perfisAtivos; _i < perfisAtivos_1.length; _i++) {
            var perfil = perfisAtivos_1[_i];
            console.log("\n            User Ativo: ".concat(perfil.user, "\n                "));
        }
        input("\nPressione Enter para retornar ao menu...");
        this.menu();
    };
    App.prototype.seguirPerfil = function () {
        this.titulo();
        console.log("sssss\n        \u2756 SEGUIR PERFIL \u2756\n");
        console.log("       Preencha o usuario do perfil que deseja seguir.\n");
        var user = input("      User: ");
        var perfilSeguir = this._redeSocial.consultarPerfil(undefined, user);
        if (perfilSeguir) {
            console.log("\n        Perfil Encontrado:\n\n        Id: ".concat(perfilSeguir.id, "\n        User: ").concat(perfilSeguir.user, "\n        E-mail: ").concat(perfilSeguir.email, "\n            "));
            perfilSeguir = perfilSeguir;
            redeSocial.seguirPerfil(perfilLogado, perfilSeguir.id);
        }
        else {
            console.log("\n     Perfil nao encontrado!");
        }
        input("\nPressione Enter para retornar ao menu...");
        this.menu();
    };
    App.prototype.exibirSeguidores = function () {
        this.titulo();
        console.log("\n        \u2756 SEGUIDORES \u2756\n");
        for (var _i = 0, _a = perfilLogado.seguidores; _i < _a.length; _i++) {
            var seguido = _a[_i];
            console.log("\n            Seguidor: ".concat(seguido.user, "\n                "));
        }
        console.log("       Preencha os que quiser para acessar o seguidor.\n");
        var user = input("      User: ");
        var perfil = (this._redeSocial.consultarPerfil(undefined, user));
        var ehSeguidor = false;
        for (var _b = 0, _c = perfilLogado.seguidores; _b < _c.length; _b++) {
            var seguidor = _c[_b];
            if (seguidor.id == perfil.id) {
                ehSeguidor = true;
            }
        }
        if (perfil != null && ehSeguidor == true) {
            console.log("\n        Seguidor Encontrado:\n\n        Id: ".concat(perfil.id, "\n        User: ").concat(perfil.user, "\n        E-mail: ").concat(perfil.email, "\n            "));
            var postagensSeguidor = redeSocial.exibirPostagensDoSeguidor(perfil);
            console.log('\nPostagens do Seguidor:');
            for (var _d = 0, postagensSeguidor_1 = postagensSeguidor; _d < postagensSeguidor_1.length; _d++) {
                var postagem = postagensSeguidor_1[_d];
                console.log("\n            Postagem: ".concat(postagem.texto, "\n            User: ").concat(postagem.perfil.user, "\n            Data: ").concat(postagem.data));
                if (postagem instanceof postagem_avancada_1.PostagemAvancada) {
                    var postagemAvancada = postagem;
                    for (var _e = 0, _f = postagemAvancada.hashtags; _e < _f.length; _e++) {
                        var hashtag = _f[_e];
                        console.log("Hashtag: #".concat(hashtag));
                    }
                }
            }
        }
        else {
            console.log("\n     Perfil nao encontrado ou nao é um dos seus seguidores!");
        }
        input("\nPressione Enter para retornar ao menu...");
        this.menu();
    };
    App.prototype.desseguirPerfil = function () {
        this.titulo();
        console.log("\n        \u2756 DEIXAR DE SEGUIR PERFIL \u2756\n");
        for (var _i = 0, _a = perfilLogado.seguidos; _i < _a.length; _i++) {
            var seguido = _a[_i];
            console.log("\n            Seguidor: ".concat(seguido.user, "\n                "));
        }
        console.log("       Preencha o usario do perfil que deseja deixar de seguir.\n");
        var user = input("      User: ");
        var perfilDesseguir = this._redeSocial.consultarPerfil(undefined, user);
        if (perfilDesseguir) {
            console.log("\n        Perfil Encontrado:\n\n        Id: ".concat(perfilDesseguir.id, "\n        User: ").concat(perfilDesseguir.user, "\n        E-mail: ").concat(perfilDesseguir.email, "\n            "));
            perfilDesseguir = perfilDesseguir;
            redeSocial.desseguirPerfil(perfilLogado, perfilDesseguir.id);
        }
        else {
            console.log("\n     Perfil nao encontrado!");
        }
        input("\nPressione Enter para retornar ao menu...");
        this.menu();
    };
    App.prototype.exibirSeguindo = function () {
        this.titulo();
        console.log("\n        \u2756 PERFIS QUE VOCE SEGUE \u2756\n");
        for (var _i = 0, _a = perfilLogado.seguidos; _i < _a.length; _i++) {
            var seguido = _a[_i];
            console.log("\n            Seguidor: ".concat(seguido.user, "\n                "));
        }
        console.log("       Preencha o usuario do seu seguido para acessar as postagens.\n");
        var user = input("      User: ");
        var perfil = (this._redeSocial.consultarPerfil(undefined, user));
        var ehSeguido = false;
        for (var _b = 0, _c = perfilLogado.seguidos; _b < _c.length; _b++) {
            var seguido = _c[_b];
            if (seguido.id == perfil.id) {
                ehSeguido = true;
            }
        }
        if (perfil != null && ehSeguido == true) {
            console.log("\n        Seguido Encontrado:\n\n        Id: ".concat(perfil.id, "\n        User: ").concat(perfil.user, "\n        E-mail: ").concat(perfil.email, "\n            "));
            var postagensSeguido = redeSocial.exibirPostagensDoSeguidor(perfil);
            console.log('Postagens do Seguido:');
            for (var _d = 0, postagensSeguido_1 = postagensSeguido; _d < postagensSeguido_1.length; _d++) {
                var postagem = postagensSeguido_1[_d];
                console.log("\n            Postagem: ".concat(postagem.texto, "\n            User: ").concat(postagem.perfil.user, "\n            Data: ").concat(postagem.data));
                if (postagem instanceof postagem_avancada_1.PostagemAvancada) {
                    var postagemAvancada = postagem;
                    for (var _e = 0, _f = postagemAvancada.hashtags; _e < _f.length; _e++) {
                        var hashtag = _f[_e];
                        console.log("Hashtag: #".concat(hashtag));
                    }
                }
            }
        }
        else {
            console.log("\n     Perfil nao encontrado ou voce nao o segue!");
        }
        input("\nPressione Enter para retornar ao menu...");
        this.menu();
    };
    App.prototype.quebrarTextoEmLinhas = function (texto, maxCaracteresPorLinha) {
        var palavras = texto.split(' ');
        var linhaAtual = '';
        var linhas = [];
        for (var _i = 0, palavras_1 = palavras; _i < palavras_1.length; _i++) {
            var palavra = palavras_1[_i];
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
    };
    App.prototype.retornarHashtags = function () {
        //Erro
        var postagens = this._redeSocial.repoPostagens.postagens;
        var hashtags = "";
        for (var i = 0; i < postagens.length; i++) {
            var post = postagens[i];
            if (post instanceof postagem_avancada_1.PostagemAvancada) {
                for (var _i = 0, _a = post.hashtags; _i < _a.length; _i++) {
                    var hash = _a[_i];
                    hashtags += hash + " ";
                }
            }
        }
        var hashtagsArray = hashtags.split(" ");
        return hashtagsArray;
    };
    Object.defineProperty(App.prototype, "redeSocial", {
        get: function () {
            return this._redeSocial;
        },
        enumerable: false,
        configurable: true
    });
    App.prototype.exibirHashtagsPopulares = function () {
        this.titulo();
        console.log("\n        \u2756 HASHTAGS POPULARES \u2756\n");
        var hashtags = this.retornarHashtags();
        var hashtagPopular = "";
        var hashtagsPopulares = [];
        var contador = 0;
        console.log(hashtags);
        for (var _i = 0, hashtags_1 = hashtags; _i < hashtags_1.length; _i++) {
            var hash = hashtags_1[_i];
            hashtagPopular = hash;
            for (var _a = 0, hashtags_2 = hashtags; _a < hashtags_2.length; _a++) {
                var hashtag = hashtags_2[_a];
                if (hashtag == hashtagPopular && hashtag != " ") {
                    contador++;
                }
            }
            if (contador >= 5) {
                if (!hashtagsPopulares.includes(hashtagPopular)) {
                    hashtagsPopulares.push(hashtagPopular);
                }
                contador = 0;
            }
        }
        for (var _b = 0, hashtagsPopulares_1 = hashtagsPopulares; _b < hashtagsPopulares_1.length; _b++) {
            var hash = hashtagsPopulares_1[_b];
            console.log("#".concat(hash));
        }
        input("\nPressione Enter para retornar ao menu...");
        this.menu();
    };
    return App;
}());
var redeSocial = new rede_social_1.RedeSocial(new repositorio_perfis_1.RepositorioDePerfis, new repositorio_postagens_1.RepositorioDePostagens);
var app = new App(redeSocial);
if (isLogado) {
    app.menu();
}
else {
    app.acessarApp();
}
// // Armazenamento
// function salvarPerfisTxt(caminhoArquivo: string, perfis: Perfil[]): void {
//     const dadosPerfisTxt = perfis.map(perfil => {
//         return `${perfil['_id']},${perfil['_user']},${perfil['_email']},${perfil['_senha']}`
//     }).join('\n')
//     salvarDadosTxt(caminhoArquivo, dadosPerfisTxt)
// }
// function salvarPostagensTxt(caminhoArquivo: string, postagens: (Postagem | PostagemAvancada)[]): void {
//     const dadosPostagensTxt = postagens.map(postagem => {
//         if ('_hashtags' in postagem) {
//             return `${postagem['_id']},${postagem['_texto']},${postagem['_curtidas']},${postagem['_descurtidas']},${postagem['_data']},${postagem['_perfil']['_user']},${(postagem as PostagemAvancada)['_hashtags'].join(',')},${(postagem as PostagemAvancada)['_visualizacoesRestantes']},PostagemAvancada`;
//         } else {
//             return `${postagem['_id']},${postagem['_texto']},${postagem['_curtidas']},${postagem['_descurtidas']},${postagem['_data']},${postagem['_perfil']['_user']},Postagem`;
//         }
//     }).join('\n');
//     salvarDadosTxt(caminhoArquivo, dadosPostagensTxt);
// }
// function salvarDadosTxt(caminhoArquivo: string, dados: string): void {
//     try {
//         fs.writeFileSync(caminhoArquivo, dados, 'utf-8')
//     } catch (erro) {
//     }
// }
// function salvar(): void {
//     salvarPerfisTxt('/home/rsmwall/Github/ifpi-ads-course/ads-2023.2/programacao-orientada-objetos/avaliacoes/rede-social/app/docs/perfis.txt', app.redeSocial.repoPerfis.perfis)
//     salvarPostagensTxt('/home/rsmwall/Github/ifpi-ads-course/ads-2023.2/programacao-orientada-objetos/avaliacoes/rede-social/app/docs/postagens.txt', app.redeSocial.repoPostagens.postagens)
// }
// function lerDadosTxt(caminhoArquivo: string): string[] {
//     try {
//         const dados = fs.readFileSync(caminhoArquivo, 'utf-8')
//         return dados.split('\n').map(line => line.trim()).filter(Boolean)
//     } catch (erro) {
//         return []
//     }
// }
// function carregarPerfis(caminhoArquivo: string): Perfil[] {
//     const dadosPerfis = lerDadosTxt(caminhoArquivo)
//     const perfis: Perfil[] = []
//     for (const linha of dadosPerfis) {
//         const [id, user, email, senha] = linha.split(',')
//         const perfil = new Perfil(parseInt(id), user, email, senha)
//         app.redeSocial.inserirPerfil(perfil)
//     }
//     return perfis
// }
// function carregarPostagens(caminhoArquivo: string): (Postagem | PostagemAvancada)[] {
//     const dadosPostagens = lerDadosTxt(caminhoArquivo)
//     const postagens: (Postagem | PostagemAvancada)[] = []
//     for (const linha of dadosPostagens) {
//         const [id, texto, curtidas, descurtidas, data, perfilUser, ...resto] = linha.split(',')
//         const perfil = new Perfil(0, perfilUser, '', '')
//         const postagem = new Postagem(parseInt(id), texto, parseInt(curtidas), parseInt(descurtidas), new Date(data), perfil)
//         if (resto.length > 0) {
//             const hashtags = resto.slice(0, -1)
//             const visualizacoesRestantes = parseInt(resto[resto.length - 1])
//             const postagemAvancada = new PostagemAvancada(postagem.id, postagem.texto, postagem.curtidas, postagem.descurtidas, postagem.data, postagem.perfil, visualizacoesRestantes)
//             postagemAvancada.hashtags = hashtags
//             app.redeSocial.inserirPostagem(postagemAvancada)
//         } else {
//             app.redeSocial.inserirPostagem(postagem)
//         }
//     }
//     return postagens
// }
// function carregar(): void {
//     carregarPerfis('/home/rsmwall/Github/ifpi-ads-course/ads-2023.2/programacao-orientada-objetos/avaliacoes/rede-social/app/docs/perfis.txt')
//     carregarPostagens('/home/rsmwall/Github/ifpi-ads-course/ads-2023.2/programacao-orientada-objetos/avaliacoes/rede-social/app/docs/postagens.txt')
// }
