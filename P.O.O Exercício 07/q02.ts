class Calculadora {
    private _operando_01: number;
    private _operando_02: number;

    constructor (operando_01: number, operando_02: number) {
        this._operando_01 = operando_01
        this._operando_02 = operando_02
    }

    public somar(): number{
        return this._operando_01 + this._operando_02
    }
}