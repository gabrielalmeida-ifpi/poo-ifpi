import prompt from "prompt-sync";
import { Conta, Banco } from "./banco.js";
var input = prompt();
var b = new Banco();
var opcao = '';
do {
    console.log('\nBem vindo\nDigite uma opção:');
    console.log('1 - Cadastrar 2 - Consultar 3 - Sacar\n' +
        '4 - Depositar 5 - Excluir 6 - Transferir\n' +
        '7 – Totalizações' +
        '0 - Sair\n');
    opcao = input("Opção:");
    switch (opcao) {
        case "1":
            inserir();
            break;
        case "2":
            consultar();
            break;
        case "3":
            sacar();
            break;
        case "4":
            depositar();
            break;
        case "5":
            excluir();
            break;
        case "6":
            transferir();
            break;
        case "7":
            retornar_totalizacoes();
            break;
    }
    input("Operação finalizada. Digite <enter>");
} while (opcao != "0");
console.log("Aplicação encerrada");
function inserir() {
    console.log("\nCadastrar conta\n");
    var numero = input('Digite o número da conta: ');
    var conta;
    conta = new Conta(numero, 'Pessoa', 0);
    b.inserir(conta);
    console.log('Conta inserida com sucesso.');
}
function consultar() {
    var numero = input('Digite o número da conta: ');
    var contaProcurada;
    for (var i = 0; i < b.contas.length; i++) {
        if (b.contas[i].numero == numero) {
            contaProcurada = b.contas[i];
            break;
        }
    }
    return console.log("A conta de n\u00FAmero ".concat(numero, " possui saldo de R$").concat(contaProcurada.saldo, "."));
}
function sacar() {
    var numero = input('Digite o número da conta: ');
    var valor = input('Digite o valor a sacar: ');
    var valor_numerico = parseFloat(valor);
    var indiceProcurado = b.consultarPorIndice(numero);
    if (indiceProcurado != -1) {
        var conta = b.contas[indiceProcurado];
        conta.sacar(valor_numerico);
    }
    console.log('Operação de saque realizada com sucesso.');
}
function depositar() {
    var numero = input('Digite o número da conta: ');
    var valor = input('Digite o valor a transferir: ');
    var valor_numerico = parseFloat(valor);
    var conta_alvo;
    for (var i = 0; i < b.contas.length; i++) {
        if (b.contas[i].numero == numero) {
            conta_alvo = b.contas[i];
        }
    }
    conta_alvo.depositar(valor_numerico);
    console.log('Operação de depósito realizada com sucesso.');
}
function excluir() {
    var numero = input('Digite o número da conta: ');
    var indiceProcurado = b.consultarPorIndice(numero);
    if (indiceProcurado != -1) {
        for (var i = indiceProcurado; i < b.contas.length; i++) {
            b.contas[i] = b.contas[i + 1];
        }
        b.contas.pop();
    }
    console.log('Conta excluida com sucesso.');
}
function transferir() {
    var numeroCredito = input('Digite o número da conta a receber crédito: ');
    var numeroDebito = input('Digite o número da conta ser debitada: ');
    var valor = input('Digite o valor da transferência: ');
    var valor_numerico = parseFloat(valor);
    var conta_credito = b.consultar(numeroCredito);
    var conta_debito = b.consultar(numeroDebito);
    conta_debito.transferir(conta_credito, valor_numerico);
    console.log('Operação de transferência realizada com sucesso.');
}
function retornar_totalizacoes() {
    var totalizacao = 0;
    for (var i = 0; i < b.contas.length; i++) {
        totalizacao += b.contas[i].saldo;
    }
    return console.log("No total, o banco armazena R$".concat(totalizacao, "."));
}
