class Calculadora {
    private _operando_01: number;
    private _operando_02: number;

    constructor (operando_01: number, operando_02: number) {
        this._operando_01 = operando_01
        this._operando_02 = operando_02
    }

    get operando_01(): number {
        return this._operando_01;
    }

    get operando_02(): number {
        return this._operando_02;
    }

    public somar(): number{
        return this._operando_01 + this._operando_02
    }
}

class CalculadoraCientifica extends Calculadora {
    constructor (operando_01: number, operando_02: number) {
        super(operando_01, operando_02)
    }
    
    public exponenciacao(): number{
        return this.operando_01**2
    }
}