class Equipamento {
    ligado: boolean = false

    estaLigado() {
        return this.ligado
    }

    liga(){
        if (this.estaLigado() == true){
            return
        }
        else{this.ligado = true}
    }
    desliga(){
        if (this.estaLigado() == false){
            return
        }
        else{this.ligado = false}
    }
    inverte(){
        if (this.estaLigado() == true){
            this.ligado = false
        }
        else if (this.estaLigado() == false){
            this.ligado = true
        }
    }
}

let new_equipamento: Equipamento = new Equipamento()

console.log(new_equipamento.estaLigado())

new_equipamento.liga()
console.log(new_equipamento.estaLigado())

new_equipamento.liga()
console.log(new_equipamento.estaLigado())

new_equipamento.desliga()
console.log(new_equipamento.estaLigado())

new_equipamento.desliga()
console.log(new_equipamento.estaLigado())

new_equipamento.inverte()
console.log(new_equipamento.estaLigado())

new_equipamento.inverte()
console.log(new_equipamento.estaLigado())

