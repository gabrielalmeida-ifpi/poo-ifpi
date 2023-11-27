"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var input = require('prompt-sync')();
var conta_1 = require("../classes-respostas/conta");
var banco_1 = require("../classes-respostas/banco");
//Testes das implementações de exceção em consultar e consultarIndice
var b = new banco_1.Banco();
b.inserir(new conta_1.Conta("123", 100));
b.inserir(new conta_1.Conta("234", 150));
//b.consultar("777")
b.consultarPorIndice("890");
