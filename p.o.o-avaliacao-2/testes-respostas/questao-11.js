"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var input = require('prompt-sync')();
var conta_1 = require("../classes-respostas/conta");
var banco_1 = require("../classes-respostas/banco");
//Testes do validarValor
var b = new banco_1.Banco();
var conta = new conta_1.Conta("123", 100);
b.inserir(conta);
//b.sacar("123", -2)
//b.sacar("123", 0)
//b.depositar("123", 0)
//b.depositar("123", -2)
