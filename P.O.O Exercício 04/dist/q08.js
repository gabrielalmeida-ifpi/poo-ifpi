"use strict";
var Equipamento = /** @class */ (function () {
    function Equipamento() {
        this.ligado = false;
    }
    Equipamento.prototype.estaLigado = function () {
        return this.ligado;
    };
    Equipamento.prototype.liga = function () {
        if (this.estaLigado() == true) {
            return;
        }
        else {
            this.ligado = true;
        }
    };
    Equipamento.prototype.desliga = function () {
        if (this.estaLigado() == false) {
            return;
        }
        else {
            this.ligado = false;
        }
    };
    Equipamento.prototype.inverte = function () {
        if (this.estaLigado() == true) {
            this.ligado = false;
        }
        else if (this.estaLigado() == false) {
            this.ligado = true;
        }
    };
    return Equipamento;
}());
var new_equipamento = new Equipamento();
console.log(new_equipamento.estaLigado());
new_equipamento.liga();
console.log(new_equipamento.estaLigado());
new_equipamento.liga();
console.log(new_equipamento.estaLigado());
new_equipamento.desliga();
console.log(new_equipamento.estaLigado());
new_equipamento.desliga();
console.log(new_equipamento.estaLigado());
new_equipamento.inverte();
console.log(new_equipamento.estaLigado());
new_equipamento.inverte();
console.log(new_equipamento.estaLigado());
