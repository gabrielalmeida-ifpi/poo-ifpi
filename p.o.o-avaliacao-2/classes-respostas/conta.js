"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Poupanca = exports.Conta = void 0;
var console_1 = require("console");
var questao_10_1 = require("../testes-respostas/questao-10");
var Conta = /** @class */ (function () {
    function Conta(numero, saldoInicial) {
        if (saldoInicial < 0) {
            throw (0, console_1.error)('Erro! Você inseriu um valor de saldo negativo.'); //Q.6
        }
        this.depositar(saldoInicial); //Q.10
        this._numero = numero;
        this._saldo = saldoInicial;
    }
    Conta.prototype.validarValor = function (valor) {
        if (valor == 0 || valor < 0) {
            throw new questao_10_1.ValorInvalidoError("Valor inválido! Valores menores ou iguais a zero não são permitidos.");
        }
    };
    Conta.prototype.sacar = function (valor) {
        this.validarValor(valor); // Q.11
        if (this._saldo < valor) {
            throw new Error('Saldo insuficiente.');
        }
        this._saldo = this._saldo - valor;
    };
    Conta.prototype.depositar = function (valor) {
        this.validarValor(valor); // Q.11
        this._saldo = this._saldo + valor;
    };
    Conta.prototype.transferir = function (contaDestino, valor) {
        this.sacar(valor);
        contaDestino.depositar(valor);
    };
    Object.defineProperty(Conta.prototype, "numero", {
        get: function () {
            return this._numero;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Conta.prototype, "saldo", {
        get: function () {
            return this._saldo;
        },
        enumerable: false,
        configurable: true
    });
    return Conta;
}());
exports.Conta = Conta;
var Poupanca = /** @class */ (function (_super) {
    __extends(Poupanca, _super);
    function Poupanca(numero, saldo, taxaDeJuros) {
        var _this = _super.call(this, numero, saldo) || this;
        _this._taxaDeJuros = taxaDeJuros;
        return _this;
    }
    Poupanca.prototype.renderJuros = function () {
        var juros = (this.saldo * this._taxaDeJuros / 100);
        this.depositar(juros);
    };
    Object.defineProperty(Poupanca.prototype, "taxaDeJuros", {
        get: function () {
            return this._taxaDeJuros;
        },
        enumerable: false,
        configurable: true
    });
    return Poupanca;
}(Conta));
exports.Poupanca = Poupanca;
