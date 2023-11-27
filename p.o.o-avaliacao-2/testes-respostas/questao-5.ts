let input = require('prompt-sync')();

import {Conta} from "../classes-respostas/conta"
import {Banco} from "../classes-respostas/banco"

let b: Banco = new Banco()

b.inserir(new Conta("123", 100))
b.inserir(new Conta("234", 150))

input("Contas inseridas. <enter> para continuar.")

b.transferir("123", "234", 9999999)

/*
Sim, foi propagado. Essa implementação é confiável pois garante que erros
podem ser tratados em qualquer nível da aplicação, ao contrário de outras
alternativas como a de mostrar mensagens.
*/