import {Conta} from "../classes-respostas/conta"
let input = require('prompt-sync')();

//Testes da Questão 3:

const conta = new Conta('123', 100)
conta.sacar(50)
console.log('Novo saldo:', conta.saldo)

input("Operacao finalizada. Digite <enter>")

conta.sacar(75)
console.log('Novo saldo:', conta.saldo)

input("Operacao finalizada. Digite <enter>")