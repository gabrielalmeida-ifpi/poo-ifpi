let input = require('prompt-sync')();

import {Conta} from "../classes-respostas/conta"
import {Banco} from "../classes-respostas/banco"

//Testes das implementações de exceção em consultar e consultarIndice

let b: Banco = new Banco()

b.inserir(new Conta("123", 100))
b.inserir(new Conta("234", 150))

b.consultar("777")
//b.consultarPorIndice("890")