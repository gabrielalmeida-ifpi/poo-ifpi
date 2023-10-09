class Hora {
    hora: number;
    minutos: number;
    segundos: number;

    constructor(hora: number, minutos: number, segundos: number) {
        this.hora = hora
        this.minutos = minutos
        this.segundos = segundos
    }

    ler_hora() {
        console.log(`São ${this.hora} horas.\n`)
    }
    ler_minutos() {
        console.log(`${this.minutos} minutos.\n`)
    }
    ler_segundos() {
        console.log(`${this.segundos} segundos.\n`)
    }
    ler_horario() {
        console.log(`O horário é ${this.hora}:${this.minutos}:${this.segundos}.\n`)
    }
}

let hora = new Hora(22, 30, 45)

hora.ler_hora()
hora.ler_minutos()
hora.ler_segundos()
hora.ler_horario()