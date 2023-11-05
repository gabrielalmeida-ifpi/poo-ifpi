import prompt from "prompt-sync";
import { RedeSocial } from "./classes/rede-social.js";
import { Perfil } from "./classes/perfil.js";
import { Postagem } from "./classes/postagem.js";
import { RepositorioDePerfis } from "./classes/repositorio-perfis.js";
import { RepositorioDePostagens } from "./classes/repositorio-postagens.js";
var input = prompt();
var opcao = '';
var id = 1;
var App = /** @class */ (function () {
    function App(redeSocial) {
        this.redeSocial = redeSocial;
    }
    App.prototype.opcoes = function () {
        do {
            console.log('\nBem-vindo ao Rafabook\nDigite uma opção:');
            console.log('1 - Incluir um Perfil 2 - Consultar um Perfil  3 - Incluir uma Postagem\n' +
                '4 - Consultar uma Postagem 5 - Curtir uma Postagem 6 - Descurtir uma Postagem\n' +
                '7 – Exibir Postagens por Perfil 8 - Exibir Postagens por Hashtag' +
                '0 - Sair\n');
            opcao = input("Opção:");
            switch (opcao) {
                case "1":
                    this.incluirPerfil();
                    break;
                case "2":
                    this.consultarPerfil();
                    break;
                case "3":
                    break;
                case "4":
                    break;
                case "5":
                    break;
                case "6":
                    break;
                case "7":
                    break;
                case "8":
                    break;
            }
            input("Digite <enter> para continuar navegando.");
        } while (opcao != "0");
        console.log("Aplicação encerrada");
    };
    App.prototype.incluirPerfil = function () {
        print('Insira as informações para criar seu Perfil:\n');
        var idAtual = id;
        var user = input('Insira seu nome de usuário: ');
        var email = input('Insira seu email: ');
        var postagens = [];
        var perfil = new Perfil(idAtual, user, email, postagens);
        r.incluirPerfil(perfil);
        id++;
        print('Seu perfil foi criado com sucesso!');
    };
    App.prototype.consultarPerfil = function () {
        print('Insira as informações necessárias para encontrarmos o perfil:\n');
        var user = input('Insira o nome do usuário: ');
        var email = input('Insira o email do usuário: ');
        var idUser = parseFloat(input('Insira o ID do usuário: '));
        var perfilEncontrado = r.consultarPerfil(user, email, idUser);
        if (perfilEncontrado != null) {
            return print("Perfil Encontrado! Aqui est\u00E3o as informa\u00E7\u00F5es dele:\n\n        Nome: ".concat(perfilEncontrado.user, "\n        Email: ").concat(perfilEncontrado.email, "\n        ID: ").concat(perfilEncontrado.id));
        }
        print('Perfil não encontrado! Verifique se digitou as informações corretamente.');
        return;
    };
    App.prototype.incluirPostagem = function () {
        return;
        //WIP
    };
    App.prototype.consultarPostagem = function () {
        //WIP
    };
    App.prototype.curtir = function () {
        //WIP
    };
    return App;
}());
function print(texto) {
    return console.log(texto);
}
var postagens = [];
var novoPerfil = new Perfil(1, 'JoãozinGameplays', 'amongus@gmail.com', postagens);
var novaPostagem = new Postagem(1, 'Rafael feio', 69, 0, new Date(), novoPerfil);
var novoRepositorioDePerfis = new RepositorioDePerfis([]);
var novoRepositorioDePostagens = new RepositorioDePostagens([]);
var r = new RedeSocial(novoRepositorioDePerfis, novoRepositorioDePostagens);
var app = new App(r);
app.opcoes();
