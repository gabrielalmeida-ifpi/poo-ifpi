let input = require('prompt-sync')();

import {Conta} from "../classes-respostas/conta"
import {Banco} from "../classes-respostas/banco"

let b: Banco = new Banco()

b.inserir(new Conta("123", 100))
b.inserir(new Conta("234", 150))

input("Contas inseridas. <enter> para continuar.")

b.sacar("123", 15)
b.depositar("123", 50)
b.transferir("123", "234", 50)

b.sacar("123", -1)
b.depositar("123", -1)
b.transferir("123", "234", -1)

b.inserir(new Conta("234", -1))

input("Contas inseridas. <enter> para continuar.")

b.transferir("123", "234", 9999999)