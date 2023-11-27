"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banco = void 0;
var questao_7_1 = require("../testes-respostas/questao-7");
var questao_12_1 = require("../testes-respostas/questao-12");
var conta_1 = require("./conta");
var Banco = /** @class */ (function () {
    function Banco() {
        this.contas = [];
    }
    Banco.prototype.inserir = function (conta) {
        try {
            var contaConsultada = this.consultar(conta.numero);
            console.log("Conta ".concat(conta.numero, " j\u00E1 cadastrada"));
        }
        catch (error) {
            if (conta instanceof conta_1.Poupanca) {
                this.contas.push(conta);
            }
            this.contas.push(conta);
        }
    };
    Banco.prototype.consultar = function (numero) {
        var contaConsultada = undefined;
        for (var _i = 0, _a = this.contas; _i < _a.length; _i++) {
            var conta = _a[_i];
            if (conta.numero == numero) {
                contaConsultada = conta;
                break;
            }
        }
        if (!contaConsultada) { //Q.7
            throw new questao_7_1.ContaInexistenteError("Conta inexistente! Tente novamente.");
        }
        return contaConsultada;
    };
    Banco.prototype.consultarPorIndice = function (numero) {
        var indice = -1;
        for (var i = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero == numero) {
                indice = i;
                break;
            }
        }
        if (indice == undefined) { //Q.7
            throw new questao_7_1.ContaInexistenteError("Conta inexistente! Tente novamente.");
        }
        return indice;
    };
    Banco.prototype.alterar = function (conta) {
        var indice = this.consultarPorIndice(conta.numero);
        this.contas[indice] = conta;
    };
    Banco.prototype.excluir = function (numero) {
        var indice = this.consultarPorIndice(numero);
        if (indice != -1) {
            for (var i = indice; i < this.contas.length; i++) {
                this.contas[i] = this.contas[i + 1];
            }
            this.contas.pop();
        }
    };
    Banco.prototype.depositar = function (numero, valor) {
        var contaConsultada = this.consultar(numero);
        contaConsultada.depositar(valor);
    };
    Banco.prototype.sacar = function (numero, valor) {
        var contaConsultada = this.consultar(numero);
        contaConsultada.sacar(valor);
    };
    Banco.prototype.transferir = function (numeroCredito, numeroDebito, valor) {
        var contaCredito = this.consultar(numeroCredito);
        var contaDebito = this.consultar(numeroDebito);
        contaDebito.transferir(contaCredito, valor);
    };
    Banco.prototype.getTotalDepositado = function () {
        var totalDepositado = this.contas.reduce(function (totalAcumulado, conta) {
            return totalAcumulado + conta.saldo;
        }, 0);
        return totalDepositado;
    };
    Banco.prototype.renderJuros = function (numero) {
        var conta = this.consultar(numero);
        if (!(conta instanceof conta_1.Poupanca)) {
            throw new questao_12_1.PoupancaInvalidaError("Essa conta não é uma conta Poupança. Tente novamente.");
        }
        conta.renderJuros();
        conta.renderJuros();
        conta.renderJuros();
    };
    Banco.prototype.getTotalContas = function () {
        return this.contas.length;
    };
    Banco.prototype.getMediaDepositada = function () {
        return this.getTotalDepositado() / this.getTotalContas();
    };
    return Banco;
}());
exports.Banco = Banco;
