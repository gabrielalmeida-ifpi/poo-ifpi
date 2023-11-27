"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var input = require('prompt-sync')();
var conta_1 = require("./conta");
var banco_1 = require("./banco");
var questao_7_1 = require("../testes-respostas/questao-7");
var questao_15_1 = require("../testes-respostas/questao-15");
var banco = new banco_1.Banco();
var opcao = '';
do {
    console.log("\nBem-vindo, digite uma opcao: \n");
    console.log('1 - Cadastrar      2 - Consultar       3 - Sacar\n' +
        '4 - Depositar      5 - Excluir         6 - Transferir\n' +
        '7 - Render Juros   8 - Cadastrar Poupança   0 - Sair\n');
    try {
        opcao = input("Opcao: ");
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
                renderJuros();
                break;
            case "8":
                cadastrarPoupanca();
                break;
            default:
                console.log("Opcao invalida");
        }
    }
    catch (e) {
        // if (e instanceof AplicacaoError) {
        console.log(e.message);
        // }
        // if (e instanceof Error) {
        //     console.log("Erro no sistema. Contate o administrador.")
        // }
    }
    finally {
        input("Operação finalizada. Digite 0 para sair.");
    }
} while (opcao != "0");
console.log("Aplicação encerrada");
function inserir() {
    console.log("\nCadastrar conta\n");
    var numero = input("Digite o numero da conta: ");
    if (numero == '') {
        throw new questao_15_1.ValorVazioError("Não é permitida a inserção de valores vazios.");
    }
    var conta;
    conta = new conta_1.Conta(numero, 100);
    banco.inserir(conta);
    console.log("Conta inserida.");
}
function consultar() {
    console.log("\nConsultar conta\n");
    var numero = input("Digite o numero da conta: ");
    if (numero == '') {
        throw new questao_15_1.ValorVazioError("Não é permitida a inserção de valores vazios.");
    }
    try {
        var conta = banco.consultar(numero);
        console.log("Essa conta existe no sistema!");
        console.log("\n        Numero: ".concat(conta.numero, "\n        Saldo: ").concat(conta.saldo.toFixed(2)));
    }
    catch (e) {
        throw new questao_7_1.ContaInexistenteError("Conta não encontrada!");
    }
}
function sacar() {
    console.log("\nSacar valor\n");
    var numero = input("Digite o numero da conta: ");
    var valor = +input("Digite o valor de saque: ");
    if (numero == '' || valor == 0 || valor == undefined) {
        throw new questao_15_1.ValorVazioError("Não é permitida a inserção de valores vazios.");
    }
    if (Number.isNaN(valor)) {
        throw new questao_15_1.ConversaoDeValorInvalidaError("Você não digitou um valor numérico para o valor!");
    }
    banco.sacar(numero, valor);
}
function depositar() {
    console.log("\nDepositar valor\n");
    var numero = input("Digite o numero da conta: ");
    var valor = +input("Digite o valor de deposito: ");
    if (numero == '' || valor == 0 || valor == undefined) {
        throw new questao_15_1.ValorVazioError("Não é permitida a inserção de valores vazios.");
    }
    if (Number.isNaN(valor)) {
        throw new questao_15_1.ConversaoDeValorInvalidaError("Você não digitou um valor numérico para o valor!");
    }
    banco.depositar(numero, valor);
}
function excluir() {
    console.log("\nExcluir conta\n");
    var numero = input("Digite o numero da conta: ");
    if (numero == '') {
        throw new questao_15_1.ValorVazioError("Não é permitida a inserção de valores vazios.");
    }
    try {
        banco.consultar(numero);
        banco.excluir(numero);
        console.log("Conta excluída com sucesso.");
    }
    catch (_a) {
        throw new questao_7_1.ContaInexistenteError("Conta não consta no sistema! Tente novamente.");
    }
}
function transferir() {
    console.log("\nTransferir valor\n");
    var numeroDebito = input("Digite o numero da conta de origem: ");
    var numeroCredito = input("Digite o numero da conta de destino: ");
    var valor = +input("Digite o valor a ser transferido: ");
    if (numeroDebito == '' || numeroCredito == '' || valor == 0 || valor == undefined) {
        throw new questao_15_1.ValorVazioError("Não é permitida a inserção de valores vazios.");
    }
    if (Number.isNaN(valor)) {
        throw new questao_15_1.ConversaoDeValorInvalidaError("Você não digitou um valor numérico para o valor!");
    }
    try {
        banco.consultar(numeroDebito);
        banco.consultar(numeroCredito);
        banco.transferir(numeroCredito, numeroDebito, valor);
        console.log("Conta excluída com sucesso.");
    }
    catch (_a) {
        throw new questao_7_1.ContaInexistenteError("Uma dessas contas não consta no sistema! Tente novamente.");
    }
}
function renderJuros() {
    console.log("\nRender Juros\n");
    var numero = input("Digite o numero da conta: ");
    if (numero == '') {
        throw new questao_15_1.ValorVazioError("Não é permitida a inserção de valores vazios.");
    }
    banco.renderJuros(numero);
    console.log("Juros renderam!");
}
function cadastrarPoupanca() {
    console.log("\nCadastrar Conta Poupança\n");
    var numero = input("Digite o numero da conta: ");
    if (numero == '') {
        throw new questao_15_1.ValorVazioError("Não é permitida a inserção de valores vazios.");
    }
    var conta;
    conta = new conta_1.Poupanca(numero, 100, 3);
    banco.inserir(conta);
    console.log("Conta inserida.");
}
