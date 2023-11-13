import { Perfil } from "./classes/perfil.js"
import { Postagem } from "./classes/postagem.js"
import { PostagemAvancada } from "./classes/postagem-avancada.js"
import { RedeSocial } from "./classes/rede-social.js"
import { RepositorioDePerfis } from "./classes/repositorio-perfis.js"
import { RepositorioDePostagens } from "./classes/repositorio-postagens.js"
import prompt from 'prompt-sync'

let input = prompt()
let idGlobal: number = 1
let idPostGlobal = 1
let perfilLogado: Perfil;

const opcoesDeFormato = {
    hour12: true
}

class App {
    private _redeSocial: RedeSocial

    constructor(redeSocial: RedeSocial) {
        this._redeSocial = redeSocial
    }

    public menu(): void {
        let opcao: number = 0
        console.clear()
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
            20. Exibir Perfis que Você Segue
            21. Exibir Postagens de um Seguido
            0. Sair\n`)

            opcao = +input("Opcao: ")

            switch (opcao) {
                case 1:
                    this.acessoAoPerfil()
                    break
                case 2:
                    this.feed()
                    break
                case 3:
                    this.cadastrarPerfil()
                    break
                case 4:
                    this.consultarPerfil()
                    break
                case 5:
                    this.criarPostagem()
                    break
                case 6:
                    this.consultarPostId()
                    break
                case 7:
                    this.consultarPorPerfil()
                    break
                case 8:
                    this.consultarHashtag()
                    break
                case 9:
                    this.curtir()
                    break
                case 10:
                    this.descurtir()
                    break
                case 11:
                    this.exibirPerfisPopulares()
                    break
                case 12:
                    this.bloquearPerfil()
                    break
                case 13:
                    this.exibirBloqueados()
                    break
                case 14:
                    this.desbloquearPerfil()
                    break
                case 15:
                    this.exibirPerfisAtivos()
                case 16:
                    this.seguirPerfil()
                    break
                case 17:
                    this.exibirSeguidores()
                    break
                case 18:
                    this.exibirPostagensDoSeguidor()
                    break
                case 19:
                    this.desseguirPerfil()
                    break
                case 20:
                    this.exibirSeguindo()
                    break
                case 21:
                    this.exibirPostagensDoSeguido()
                    break

                    default:
            }  
        console.log("Aplicação encerrada")
    }

    public consultarHashtag(): void {
        console.clear()
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
                                    ❖ CONSULTAR POST POR HASHTAG ❖\n`)

        let hash: string = input("      Hashtag: ")
                            
        const postComHashtags = this._redeSocial.repoPostagens.postagens.filter((postagem) => {
            return (postagem instanceof PostagemAvancada) && (postagem.existeHashtag(hash))
        })

        let postagens: Postagem[] = postComHashtags
        for (let i: number = 0; i < postagens.length; i++) {
            let post: Postagem = postagens[i]
            console.log(`
            \x1b[1m@${post.perfil.user}\x1b[0m\n
            ${post.data.toLocaleString('pt-BR', opcoesDeFormato)}\n
            ${this.quebrarTextoEmLinhas(post.texto, 50)}`)
            
            let hashtags: string = ""
            if (post instanceof PostagemAvancada) {
                for (let hash of post.hashtags) {
                    hashtags += "#" + hash + " "
                }
                console.log(`\n            \x1b[94m${hashtags}\x1b[0m`)
                this._redeSocial.decrementarVisualizacoes(post)
            }

            console.log(`
            ▲ ${post.curtidas}    ▼ ${post.descurtidas}\n`)
        }  

        input("\nPressione Enter para retornar ao menu...")
        this.menu()
    }

    public consultarPorPerfil(): void {
        console.clear()
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
                                    ❖ CONSULTAR POST POR PERFIL ❖\n`)

        let user: string = input("      User: ")
                            
        let perfil: Perfil | null = this._redeSocial.consultarPerfil(undefined, user)

        let postagem: Postagem[] = this._redeSocial.consultarPostagem(undefined, undefined, undefined, perfil)

        let postagens: Postagem[] = postagem
        for (let i: number = 0; i < postagens.length; i++) {
            let post: Postagem = postagens[i]
            console.log(`
            \x1b[1m@${post.perfil.user}\x1b[0m\n
            ${post.data.toLocaleString('pt-BR', opcoesDeFormato)}\n
            ${this.quebrarTextoEmLinhas(post.texto, 50)}`)
            
            let hashtags: string = ""
            if (post instanceof PostagemAvancada) {
                for (let hash of post.hashtags) {
                    hashtags += "#" + hash + " "
                }
                console.log(`\n            \x1b[94m${hashtags}\x1b[0m`)
                this._redeSocial.decrementarVisualizacoes(post)
            }

            console.log(`
            ▲ ${post.curtidas}    ▼ ${post.descurtidas}\n`)
        }  

        input("\nPressione Enter para retornar ao menu...")
        this.menu()
    }
    
    public consultarPostId(): void {
        console.clear()
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
                                    ❖ CONSULTAR POST POR ID ❖\n`)

        let id: number = +input("      Id: ")

        let postagem: Postagem[] = this._redeSocial.consultarPostagem(id)

        let post: Postagem = postagem[0]
            console.log(`
            \x1b[1m@${post.perfil.user}\x1b[0m\n
            ${post.data.toLocaleString('pt-BR', opcoesDeFormato)}\n
            ${this.quebrarTextoEmLinhas(post.texto, 50)}`)
            
            let hashtags: string = ""
            if (post instanceof PostagemAvancada) {
                for (let hash of post.hashtags) {
                    hashtags += "#" + hash + " "
                }
                console.log(`\n            \x1b[94m${hashtags}\x1b[0m`)
                this._redeSocial.decrementarVisualizacoes(post)
            }

            console.log(`
            ▲ ${post.curtidas}    ▼ ${post.descurtidas}\n`)

        input("\nPressione Enter para retornar ao menu...")
        this.menu()
    }

    public criarPostagem(): void {
        if (perfilLogado == null) {
            console.log("Você precisa estar logado para usar esta função! Logue e tente novamente.")
            input("\nPressione Enter para retornar ao menu...")
            this.menu()
        }
        console.clear()
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
                                        ❖ CRIAR POSTAGEM ❖\n`)

        let texto: string = input("Conteudo: ")

        let escolha: string = input("Adicionar hashtags (s/n): ")
        let id = idPostGlobal
        idPostGlobal++
        
        if (perfilLogado) {
            if (escolha == 's' || escolha == 'S') {
                let postAvan: PostagemAvancada = new PostagemAvancada(id, texto, 0, 0, new Date(), perfilLogado, 100)
                this._redeSocial.incluirPostagem(postAvan)
                let hashtags: string = input("Digite a(s) hahstags que deseja adicionar (separadas por espaco: ")
                let arrayHashtags: string[] = hashtags.split(" ")
                for (let hash of arrayHashtags) {
                    postAvan.adicionarHashtags(hash)
                }
            } else {
                let post: Postagem = new Postagem(id, texto, 0, 0, new Date(), perfilLogado)
                this._redeSocial.incluirPostagem(post)
            }

            if (this._redeSocial.consultarPostagem(id)) {
                console.log("\nPostagem criada com sucesso!")
            } else {
                console.log("\nERRO! Falha na criacao.")
            }
        } else {
            console.log("\nERRO! Perfil inexistente, ou falha na criacao.")
        }

        input("\nPressione Enter para retornar ao menu...")
        this.menu()
    }

    public cadastrarPerfil(): void {
        console.clear()
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
                                        ❖ CADASTRAR PERFIL ❖\n`)

        let user: string = input("      User: ")
        let email: string = input("      E-mail: ")
        let id = idGlobal
        idGlobal++
        if (this._redeSocial.incluirPerfil(new Perfil(id, user, email))) {
            console.log("\nPerfil cadastrado com sucesso!")
        } else {
            console.log("\nERRO! Perfil existente, ou falha no cadastro.")
        }

        input("\nPressione Enter para retornar ao menu...")
        this.menu()
    }

    public consultarPerfil(): void {
        console.clear()
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
                                        ❖ CONSULTAR PERFIL ❖\n`)

        console.log("       Preencha os que quiser.\n")
        let id: number = +input("      Id: ")
        let user: string = input("      User: ")
        let email: string = input("      E-mail: ")

        let perfil: Perfil | null = this._redeSocial.consultarPerfil(id, user, email)

        if (perfil) {
            console.log(`
        Perfil Encontrado:

        Id: ${perfil.id}
        User: ${perfil.user}
        E-mail: ${perfil.email}
            `)
        } else {
            console.log("\n     Perfil nao encontrado!")
        }

        input("\nPressione Enter para retornar ao menu...")
        this.menu()
    }

    public feed(): void {
        console.clear()
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
                                            ❖ FEED ❖\n`)

        let postagens: Postagem[] = this._redeSocial.repoPostagens.postagens
        for (let i: number = 0; i < postagens.length; i++) {
            let post: Postagem = postagens[i]
            console.log(`
            \x1b[1m@${post.perfil.user}\x1b[0m\n
            ${post.data.toLocaleString('pt-BR', opcoesDeFormato)}\n
            ${this.quebrarTextoEmLinhas(post.texto, 50)}`)
            
            let hashtags: string = ""
            if (post instanceof PostagemAvancada) {
                for (let hash of post.hashtags) {
                    hashtags += "#" + hash + " "
                }
                console.log(`\n            \x1b[94m${hashtags}\x1b[0m`)
                this._redeSocial.decrementarVisualizacoes(post)
            }

            console.log(`
            ▲ ${post.curtidas}    ▼ ${post.descurtidas}\n`)
        }       

        input("\n       Pressione Enter para retornar ao menu...")
        this.menu()
    }

    public acessoAoPerfil(): void {
        console.log("       Preencha os que quiser para encontrar sua conta.\n")
        let id: number = +input("      Id: ")
        let user: string = input("      User: ")
        let email: string = input("      E-mail: ")

        let perfil: Perfil | null = this._redeSocial.consultarPerfil(id, user, email)

        if (perfil) {
            console.log(`
        Perfil Encontrado:

        Id: ${perfil.id}
        User: ${perfil.user}
        E-mail: ${perfil.email}
            `)

        perfilLogado = perfil
        
        console.log(`Agora você está logado como o user ${perfilLogado.user}.`)

        } else {
            console.log("\n     Perfil nao encontrado!")
        }
        input("\nPressione Enter para retornar ao menu...")
        this.menu()
    }

    public curtir(): void {
        let id: number = +input("      Id: ")

        let postagem: Postagem[] = this._redeSocial.consultarPostagem(id)

        let post: Postagem = postagem[0]
        this._redeSocial.curtir(post.id)
        console.log('Você curtiu o seguinte post:')
            console.log(`
            \x1b[1m@${post.perfil.user}\x1b[0m\n
            ${post.data.toLocaleString('pt-BR', opcoesDeFormato)}\n
            ${this.quebrarTextoEmLinhas(post.texto, 50)}`)
            
            let hashtags: string = ""
            if (post instanceof PostagemAvancada) {
                for (let hash of post.hashtags) {
                    hashtags += "#" + hash + " "
                }
                console.log(`\n            \x1b[94m${hashtags}\x1b[0m`)
                this._redeSocial.decrementarVisualizacoes(post)
            }

            console.log(`
            ▲ ${post.curtidas}    ▼ ${post.descurtidas}\n`)

        input("\nPressione Enter para retornar ao menu...")
        this.menu()
    }

    public descurtir(): void {
        let id: number = +input("      Id: ")

        let postagem: Postagem[] = this._redeSocial.consultarPostagem(id)

        let post: Postagem = postagem[0]
        this._redeSocial.descurtir(post.id)
        console.log('Você descurtiu o seguinte post:')
            console.log(`
            \x1b[1m@${post.perfil.user}\x1b[0m\n
            ${post.data.toLocaleString('pt-BR', opcoesDeFormato)}\n
            ${this.quebrarTextoEmLinhas(post.texto, 50)}`)
            
            let hashtags: string = ""
            if (post instanceof PostagemAvancada) {
                for (let hash of post.hashtags) {
                    hashtags += "#" + hash + " "
                }
                console.log(`\n            \x1b[94m${hashtags}\x1b[0m`)
                this._redeSocial.decrementarVisualizacoes(post)
            }

            console.log(`
            ▲ ${post.curtidas}    ▼ ${post.descurtidas}\n`)

        input("\nPressione Enter para retornar ao menu...")
        this.menu()
    }

    public exibirPerfisPopulares(): void {

        let perfisPopulares: Perfil[] = redeSocial.exibirPerfisPopulares(redeSocial.repoPerfis)

        console.log('Usuários populares: ')
        for (let perfil of perfisPopulares) {
            console.log(`ID: ${perfil.id}`)
            console.log(`User: ${perfil.user}`)
        }

        input("\nPressione Enter para retornar ao menu...")
        this.menu()

    }

    public bloquearPerfil(): void {
        if (perfilLogado == null) {
            console.log("Você precisa estar logado para usar esta função! Logue e tente novamente.")
            input("\nPressione Enter para retornar ao menu...")
            this.menu()
        }

        console.log("       Preencha os que quiser para encontrar o perfil a bloquear.\n")
        let id: number = +input("      Id: ")
        let user: string = input("      User: ")
        let email: string = input("      E-mail: ")

        let perfilBloquear: Perfil | null = this._redeSocial.consultarPerfil(id, user, email)

        if (perfilBloquear) {
            console.log(`
        Perfil Encontrado:

        Id: ${perfilBloquear.id}
        User: ${perfilBloquear.user}
        E-mail: ${perfilBloquear.email}
            `)

        perfilBloquear = <Perfil>perfilBloquear     
        redeSocial.bloquearPerfil(perfilLogado, perfilBloquear.id)

        } else {
            console.log("\n     Perfil nao encontrado!")
        }
        input("\nPressione Enter para retornar ao menu...")
        this.menu()
    }

    public desbloquearPerfil(): void {
        if (perfilLogado == null) {
            console.log("Você precisa estar logado para usar esta função! Logue e tente novamente.")
            input("\nPressione Enter para retornar ao menu...")
            this.menu()
        }
        console.log("       Preencha os que quiser para encontrar o perfil a desbloquear.\n")
        let id: number = +input("      Id: ")
        let user: string = input("      User: ")
        let email: string = input("      E-mail: ")

        let perfilDesbloquear: Perfil | null = this._redeSocial.consultarPerfil(id, user, email)

        if (perfilDesbloquear) {
            console.log(`
        Perfil Encontrado:

        Id: ${perfilDesbloquear.id}
        User: ${perfilDesbloquear.user}
        E-mail: ${perfilDesbloquear.email}
            `)

        perfilDesbloquear = <Perfil>perfilDesbloquear     
        redeSocial.desbloquearPerfil(perfilLogado, perfilDesbloquear.id)

        } else {
            console.log("\n     Perfil nao encontrado!")
        }
        input("\nPressione Enter para retornar ao menu...")
        this.menu()
    }

    public exibirBloqueados(): void {
        if (perfilLogado == null) {
            console.log("Você precisa estar logado para usar esta função! Logue e tente novamente.")
            input("\nPressione Enter para retornar ao menu...")
            this.menu()
        }
        console.log('Perfis Bloqueados:')
        for (let bloqueado of perfilLogado.bloqueados) {
            console.log(`
            User Bloqueado: ${bloqueado.user}
                `)
        }

        input("\nPressione Enter para retornar ao menu...")
        this.menu()
    }

    public exibirPerfisAtivos(): void {
        let perfisAtivos: Perfil[] = redeSocial.exibirPerfisAtivos(redeSocial.repoPerfis, redeSocial.repoPostagens)

        for (let perfil of perfisAtivos) {
            console.log(`
            User Ativo: ${perfil.user}
                `)
        }

        input("\nPressione Enter para retornar ao menu...")
        this.menu()
    }

    public seguirPerfil(): void {
        if (perfilLogado == null) {
            console.log("Você precisa estar logado para usar esta função! Logue e tente novamente.")
            input("\nPressione Enter para retornar ao menu...")
            this.menu()
        }
        console.log("       Preencha os que quiser para encontrar o perfil que deseja seguir.\n")
        let id: number = +input("      Id: ")
        let user: string = input("      User: ")
        let email: string = input("      E-mail: ")

        let perfilSeguir: Perfil | null = this._redeSocial.consultarPerfil(id, user, email)

        if (perfilSeguir) {
            console.log(`
        Perfil Encontrado:

        Id: ${perfilSeguir.id}
        User: ${perfilSeguir.user}
        E-mail: ${perfilSeguir.email}
            `)

        perfilSeguir = <Perfil>perfilSeguir     
        redeSocial.seguirPerfil(perfilLogado, perfilSeguir.id)

        } else {
            console.log("\n     Perfil nao encontrado!")
        }
        input("\nPressione Enter para retornar ao menu...")
        this.menu()
    }

    public exibirSeguidores(): void {
        if (perfilLogado == null) {
            console.log("Você precisa estar logado para usar esta função! Logue e tente novamente.")
            input("\nPressione Enter para retornar ao menu...")
            this.menu()
        }
        console.log('Perfis que o seguem:')
        for (let seguidor of perfilLogado.seguidores) {
            console.log(`
            Seguidor: ${seguidor.user}
                `)
        }
        input("\nPressione Enter para retornar ao menu...")
        this.menu()
    }

    public exibirPostagensDoSeguidor(): void {
        if (perfilLogado == null) {
            console.log("Você precisa estar logado para usar esta função! Logue e tente novamente.")
            input("\nPressione Enter para retornar ao menu...")
            this.menu()
        }

        console.log('Perfis que você segue:')
        for (let seguido of perfilLogado.seguidos) {
            console.log(`
            Seguidor: ${seguido.user}
                `)
        }

        console.log("       Preencha os que quiser para acessar o seguidor.\n")
        let id: number = +input("      Id: ")
        let user: string = input("      User: ")
        let email: string = input("      E-mail: ")

        let perfil: Perfil | null = <Perfil>(this._redeSocial.consultarPerfil(id, user, email))
        let ehSeguidor: boolean = false

        for (let seguidor of perfilLogado.seguidores) {
            if (seguidor.id == perfil.id) {
                ehSeguidor = true
            }
        }

        if (perfil != null && ehSeguidor == true) {
            console.log(`
        Seguidor Encontrado:

        Id: ${perfil.id}
        User: ${perfil.user}
        E-mail: ${perfil.email}
            `)

        let postagensSeguidor = redeSocial.exibirPostagensDoSeguidor(perfil)

        console.log('Postagens do Seguidor:')
        for (let postagem of postagensSeguidor) {
            console.log(`
            Postagem: ${postagem.texto}
            User: ${postagem.perfil.user}
            Data: ${postagem.data}`)
            if (postagem instanceof PostagemAvancada) {
            let postagemAvancada = <PostagemAvancada>postagem
            for (let hashtag of postagemAvancada.hashtags) {
            console.log(`Hashtag: #${hashtag}`)
            }
        }
        }

        } else {
            console.log("\n     Perfil nao encontrado ou nao é um dos seus seguidores!")
        }
        input("\nPressione Enter para retornar ao menu...")
        this.menu()
    }

    public desseguirPerfil(): void {
        if (perfilLogado == null) {
            console.log("Você precisa estar logado para usar esta função! Logue e tente novamente.")
            input("\nPressione Enter para retornar ao menu...")
            this.menu()
        }

        console.log('Perfis que você segue:')
        for (let seguido of perfilLogado.seguidos) {
            console.log(`
            Seguidor: ${seguido.user}
                `)
        }

        console.log("       Preencha os que quiser para acessar o perfil que deseja deixar de seguir.\n")
        let id: number = +input("      Id: ")
        let user: string = input("      User: ")
        let email: string = input("      E-mail: ")

        let perfilDesseguir: Perfil | null = this._redeSocial.consultarPerfil(id, user, email)

        if (perfilDesseguir) {
            console.log(`
        Perfil Encontrado:

        Id: ${perfilDesseguir.id}
        User: ${perfilDesseguir.user}
        E-mail: ${perfilDesseguir.email}
            `)

        perfilDesseguir = <Perfil>perfilDesseguir     
        redeSocial.desseguirPerfil(perfilLogado, perfilDesseguir.id)

        } else {
            console.log("\n     Perfil nao encontrado!")
        }
        input("\nPressione Enter para retornar ao menu...")
        this.menu()
    }

    public exibirSeguindo(): void {
        if (perfilLogado == null) {
            console.log("Você precisa estar logado para usar esta função! Logue e tente novamente.")
            input("\nPressione Enter para retornar ao menu...")
            this.menu()
        }

        console.log('Perfis que você segue:')
        for (let seguido of perfilLogado.seguidos) {
            console.log(`
            Seguidor: ${seguido.user}
                `)
        }
        input("\nPressione Enter para retornar ao menu...")
        this.menu()
    }

    public exibirPostagensDoSeguido(): void {
        if (perfilLogado == null) {
            console.log("Você precisa estar logado para usar esta função! Logue e tente novamente.")
            input("\nPressione Enter para retornar ao menu...")
            this.menu()
        }

        console.log('Perfis que você segue:')
        for (let seguido of perfilLogado.seguidos) {
            console.log(`
            Seguidor: ${seguido.user}
                `)
        }

        console.log("       Preencha os que quiser para acessar o seu seguido.\n")
        let id: number = +input("      Id: ")
        let user: string = input("      User: ")
        let email: string = input("      E-mail: ")

        let perfil: Perfil | null = <Perfil>(this._redeSocial.consultarPerfil(id, user, email))
        let ehSeguido: boolean = false

        for (let seguido of perfilLogado.seguidos) {
            if (seguido.id == perfil.id) {
                ehSeguido = true
            }
        }

        if (perfil != null && ehSeguido == true) {
            console.log(`
        Seguido Encontrado:

        Id: ${perfil.id}
        User: ${perfil.user}
        E-mail: ${perfil.email}
            `)

        let postagensSeguido = redeSocial.exibirPostagensDoSeguidor(perfil)

        console.log('Postagens do Seguido:')
        for (let postagem of postagensSeguido) {
            console.log(`
            Postagem: ${postagem.texto}
            User: ${postagem.perfil.user}
            Data: ${postagem.data}`)
            if (postagem instanceof PostagemAvancada) {
            let postagemAvancada = <PostagemAvancada>postagem
            for (let hashtag of postagemAvancada.hashtags) {
            console.log(`Hashtag: #${hashtag}`)
            }
        }
        }

        } else {
            console.log("\n     Perfil nao encontrado ou voce nao o segue!")
        }
        input("\nPressione Enter para retornar ao menu...")
        this.menu()


    }

    public quebrarTextoEmLinhas(texto: string, maxCaracteresPorLinha: number): string {
        const palavras = texto.split(' ')
        let linhaAtual = ''
        const linhas = []
      
        for (const palavra of palavras) {
          if (linhaAtual.length + palavra.length + 1 <= maxCaracteresPorLinha) {
            linhaAtual += (linhaAtual.length > 0 ? ' ' : '') + palavra;
          } else {
            linhas.push(linhaAtual);
            linhaAtual = palavra;
          }
        }

        linhas.push(linhaAtual);

        return linhas.join('\n            ');
    }
}
let redeSocial: RedeSocial = new RedeSocial(new RepositorioDePerfis, new RepositorioDePostagens)
let app: App = new App(redeSocial)
app.menu()