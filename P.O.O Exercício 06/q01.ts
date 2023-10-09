class Calculadora {
    private operando_01: number;
    private operando_02: number;

    constructor (operando_01: number, operando_02: number) {
        this.operando_01 = operando_01
        this.operando_02 = operando_02
    }

    public somar(): number{
        return this.operando_01 + this.operando_02
    }

    public multiplicar(): number{
        return this.operando_01 * this.operando_02
    }
}

let calculadora = new Calculadora(1, 2);
console.log(`Soma: ${calculadora.somar()}`)
console.log(`Multiplicação: ${calculadora.multiplicar()}`)