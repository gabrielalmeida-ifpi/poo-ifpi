import prompt from "prompt-sync";
import { RedeSocial } from "./classes/rede-social.js";
import { Perfil } from "./classes/perfil.js";
import { Postagem } from "./classes/postagem.js";
import { PostagemAvancada } from "./classes/postagem-avancada.js";
import { RepositorioDePerfis } from "./classes/repositorio-perfis.js";
import { RepositorioDePostagens } from "./classes/repositorio-postagens.js";

let input = prompt();

let opcao: String = '';
let id: number = 1;

class App {

constructor(private redeSocial: RedeSocial) {
}

public opcoes() { 

do {
console.log('\nBem-vindo ao Rafabook\nDigite uma opção:');
console.log('1 - Incluir um Perfil 2 - Consultar um Perfil  3 - Incluir uma Postagem\n' +
'4 - Consultar uma Postagem 5 - Curtir uma Postagem 6 - Descurtir uma Postagem\n' +
'7 – Exibir Postagens por Perfil 8 - Exibir Postagens por Hashtag' +
'0 - Sair\n');

opcao = input("Opção:");
switch (opcao) {
case "1":
this.incluirPerfil()
break
case "2":
this.consultarPerfil()
break
case "3":

break
case "4":

break
case "5":

break
case "6":

break
case "7":

break
case "8":
break
}
input("Digite <enter> para continuar navegando.");
} while (opcao != "0");
console.log("Aplicação encerrada");
}

public incluirPerfil() {
    print('Insira as informações para criar seu Perfil:\n')
    let idAtual: number = id;
    let user: string = input('Insira seu nome de usuário: ');
    let email: string = input('Insira seu email: ');
    let postagens: Postagem[] = [];

    let perfil: Perfil = new Perfil(idAtual, user, email, postagens);
    r.incluirPerfil(perfil);
    id++

    print('Seu perfil foi criado com sucesso!')
}

public consultarPerfil() {
    print('Insira as informações necessárias para encontrarmos o perfil:\n')
    let user: string = input('Insira o nome do usuário: ');
    let email: string = input('Insira o email do usuário: ');
    let idUser: number = parseFloat(input('Insira o ID do usuário: '));

    let perfilEncontrado = r.consultarPerfil(user, email, idUser)

    if (perfilEncontrado != null) {
        return print(`Perfil Encontrado! Aqui estão as informações dele:\n
        Nome: ${perfilEncontrado.user}
        Email: ${perfilEncontrado.email}
        ID: ${perfilEncontrado.id}`)
    }

    print('Perfil não encontrado! Verifique se digitou as informações corretamente.')
    return
}

public incluirPostagem(){
    return    
    //WIP
}

public consultarPostagem() {
    //WIP
}

public curtir() {
    //WIP
}

}

function print(texto: string){
    return console.log(texto)
}

let postagens: Postagem[] = []
let novoPerfil: Perfil = new Perfil(1, 'JoãozinGameplays', 'amongus@gmail.com', postagens)
let novaPostagem: Postagem = new Postagem(1, 'Rafael feio', 69, 0, new Date(), novoPerfil)

let novoRepositorioDePerfis: RepositorioDePerfis = new RepositorioDePerfis([])
let novoRepositorioDePostagens: RepositorioDePostagens = new RepositorioDePostagens([])

let r: RedeSocial = new RedeSocial(novoRepositorioDePerfis, novoRepositorioDePostagens)

let app: App = new App(r)

app.opcoes()




