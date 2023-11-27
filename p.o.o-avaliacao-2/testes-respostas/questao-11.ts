let input = require('prompt-sync')();

import {Conta} from "../classes-respostas/conta"
import {Banco} from "../classes-respostas/banco"

//Testes do validarValor

let b: Banco = new Banco()

b.inserir(new Conta("123", 100))

b.sacar("123", -2)
//b.sacar("123", 0)

//b.depositar("123", 0)
//b.depositar("123", -2)