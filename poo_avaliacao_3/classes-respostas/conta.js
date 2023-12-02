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
exports.Teste = exports.AuditoriaInterna = exports.SeguroDeVida = exports.ContaCorrente = exports.Conta = void 0;
var Conta = /** @class */ (function () {
    function Conta(nome, saldoInicial) {
        this._nome = nome;
        this._saldo = saldoInicial;
    }
    Object.defineProperty(Conta.prototype, "saldo", {
        get: function () {
            return this._saldo;
        },
        set: function (saldo) {
            this._saldo = saldo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Conta.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (nome) {
            this._nome = nome;
        },
        enumerable: false,
        configurable: true
    });
    return Conta;
}());
exports.Conta = Conta;
var ContaCorrente = /** @class */ (function (_super) {
    __extends(ContaCorrente, _super);
    function ContaCorrente(nome, saldo) {
        return _super.call(this, nome, saldo) || this;
    }
    ContaCorrente.prototype.calculaTributos = function () {
        return (this.saldo * 10 / 100);
    };
    return ContaCorrente;
}(Conta));
exports.ContaCorrente = ContaCorrente;
var SeguroDeVida = /** @class */ (function () {
    function SeguroDeVida() {
    }
    SeguroDeVida.prototype.calculaTributos = function () {
        return 50;
    };
    return SeguroDeVida;
}());
exports.SeguroDeVida = SeguroDeVida;
var AuditoriaInterna = /** @class */ (function () {
    function AuditoriaInterna() {
        this._tributaveis = [];
    }
    AuditoriaInterna.prototype.calcularTributos = function () {
        var somaTributos = 0;
        for (var _i = 0, _a = this._tributaveis; _i < _a.length; _i++) {
            var tributavel = _a[_i];
            somaTributos += tributavel.calculaTributos();
        }
        return somaTributos;
    };
    Object.defineProperty(AuditoriaInterna.prototype, "tributaveis", {
        get: function () {
            return this._tributaveis;
        },
        enumerable: false,
        configurable: true
    });
    return AuditoriaInterna;
}());
exports.AuditoriaInterna = AuditoriaInterna;
var Teste = /** @class */ (function () {
    function Teste() {
        this._contaCorrente1 = new ContaCorrente("João", 100);
        this._contaCorrente2 = new ContaCorrente("Maria", 150);
        this._contaCorrente3 = new ContaCorrente("Pedro", 250);
        this._seguroDeVida1 = new SeguroDeVida();
        this._seguroDeVida2 = new SeguroDeVida();
        this._seguroDeVida3 = new SeguroDeVida();
        this._auditoriaInterna = new AuditoriaInterna();
    }
    Teste.prototype.adicionarTributaveis = function () {
        this._auditoriaInterna.tributaveis.push(this._contaCorrente1, this._contaCorrente2, this._contaCorrente3, this._seguroDeVida1, this._seguroDeVida2, this._seguroDeVida3);
    };
    Teste.prototype.exibirResultadoTributos = function () {
        console.log("Tributos:");
        for (var _i = 0, _a = this._auditoriaInterna.tributaveis; _i < _a.length; _i++) {
            var tributavel = _a[_i];
            console.log("Tributo: ".concat(tributavel.calculaTributos()));
        }
        console.log("Resultado da Soma dos Tributos: ".concat(this._auditoriaInterna.calcularTributos()));
    };
    return Teste;
}());
exports.Teste = Teste;
var novoTeste = new Teste();
novoTeste.adicionarTributaveis();
novoTeste.exibirResultadoTributos();
