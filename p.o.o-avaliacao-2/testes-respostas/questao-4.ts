let input = require('prompt-sync')();
import {Conta} from "../classes-respostas/conta"

//Testes da Questão 4:

const conta1 = new Conta('234', 100)
const conta2 = new Conta('567', 100)

conta1.transferir(conta2, 50)

console.log('Novo saldo (Conta 1): ', conta1.saldo)
console.log('Novo saldo: (Conta 2): ', conta2.saldo)

input("Operacao finalizada. Digite <enter>")

conta1.transferir(conta2, 100)

console.log('Novo saldo (Conta 1): ', conta1.saldo)
console.log('Novo saldo: (Conta 2): ', conta2.saldo)

input("Operacao finalizada. Digite <enter>")

/*
O método transferir chama o método sacar, que por sua vez possue um throw error para prevenir
um débito sem ter saldo suficiente. Logo, quando a transferência indevida ocorre, o próprio throw error
implementado em sacar() é acionado, abortando a aplicação.
*/