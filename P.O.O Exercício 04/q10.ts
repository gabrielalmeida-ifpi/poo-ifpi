class Jogador {
    forca: number;
    nivel: number;
    pontos_atuais: number;

    constructor(forca: number, nivel: number, pontos_atuais: number){
        this.forca = forca
        this.nivel = nivel
        this.pontos_atuais = pontos_atuais
    }

    calcularAtaque(){
        return this.forca * this.nivel
    }
    atacar(jogador_atacado: Jogador){
        if (!jogador_atacado.estaVivo()){
            return
        }
        else {
            jogador_atacado.pontos_atuais = jogador_atacado.pontos_atuais - this.forca
        }
        }
    estaVivo(){
        if (this.pontos_atuais > 0){
            return true
        }
        else{
            return false
        }
    }
    toString(){
        return `
        Força: ${this.forca}
        Nível: ${this.nivel}
        Pontos: ${this.pontos_atuais}`
    }
}

let player_1: Jogador = new Jogador(50, 70, 100)
let player_2: Jogador = new Jogador(25, 50, 100)
player_1.atacar(player_2)
player_2.atacar(player_1)

console.log(player_1.toString())
console.log(player_2.toString())