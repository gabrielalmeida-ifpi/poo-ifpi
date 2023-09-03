"use strict";
var Conta = /** @class */ (function () {
    function Conta(numero, saldo) {
        this.numero = numero;
        this.saldo = saldo;
    }
    Conta.prototype.sacar = function (valor) {
        if (this.saldo - valor < 0) {
            return false;
        }
        else {
            this.saldo = this.saldo - valor;
            return true;
        }
    };
    Conta.prototype.depositar = function (valor) {
        this.saldo = this.saldo + valor;
    };
    Conta.prototype.consultarSaldo = function () {
        return this.saldo;
    };
    Conta.prototype.transferir = function (conta_alvo, valor) {
        if (!this.sacar(valor)) {
            return false;
        }
        else {
            this.sacar(valor);
            this.depositar(valor);
            conta_alvo.depositar(valor);
            return true;
        }
    };
    return Conta;
}());
var c1 = new Conta("1", 100);
var c2 = new Conta("2", 100);
c1.sacar(101);
c1.transferir(c2, 200);
console.log(c1.consultarSaldo());
console.log(c2.consultarSaldo());
c1.sacar(10);
c1.transferir(c2, 20);
console.log(c1.consultarSaldo()); //90
console.log(c2.consultarSaldo()); //70, 120
