class Saudacao {
    texto: string;
    destinatario: string;

    constructor(texto: string, destinatario: string){
        this.texto = texto
        this.destinatario = destinatario
    }
    
    obterSaudacao(){
        let saudacao: string = `${this.texto}, ${this.destinatario}`
        return saudacao
    }
}

let new_saudacao: Saudacao = new Saudacao("Bom dia", "João")
console.log(new_saudacao.obterSaudacao())