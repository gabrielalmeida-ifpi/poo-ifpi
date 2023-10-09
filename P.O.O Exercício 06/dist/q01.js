var Calculadora = /** @class */ (function () {
    function Calculadora(operando_01, operando_02) {
        this.operando_01 = operando_01;
        this.operando_02 = operando_02;
    }
    Calculadora.prototype.somar = function () {
        return this.operando_01 + this.operando_02;
    };
    Calculadora.prototype.multiplicar = function () {
        return this.operando_01 * this.operando_02;
    };
    return Calculadora;
}());
var calculadora = new Calculadora(1, 2);
console.log("Soma: ".concat(calculadora.somar()));
console.log("Multiplica\u00E7\u00E3o: ".concat(calculadora.multiplicar()));
export {};
