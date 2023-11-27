let input = require('prompt-sync')();
import { Conta, Poupanca } from "./conta"
import { Banco } from "./banco"
import { AplicacaoError, ContaInexistenteError, SaldoInsuficienteError } from "../testes-respostas/questao-7"
import { ValorInvalidoError } from "../testes-respostas/questao-10";
import { PoupancaInvalidaError } from "../testes-respostas/questao-12";
import { ConversaoDeValorInvalidaError, ValorVazioError } from "../testes-respostas/questao-15";

let banco: Banco = new Banco()
let opcao: string = ''

do {
    console.log("\nBem-vindo, digite uma opcao: \n")
    console.log('1 - Cadastrar      2 - Consultar       3 - Sacar\n' +
                '4 - Depositar      5 - Excluir         6 - Transferir\n' +
                '7 - Render Juros   8 - Cadastrar Poupança   0 - Sair\n')

    try {
    
    opcao = input("Opcao: ")

    switch (opcao) {
        case "1":
            inserir()
            break
        case "2":
            consultar()
            break
        case "3":
            sacar()
            break
        case "4":
            depositar()
            break
        case "5":
            excluir()
            break
        case "6":
            transferir()
            break
        case "7":
            renderJuros()
            break
        case "8":
            cadastrarPoupanca()
            break
        default:
            console.log("Opcao invalida")
    }
} catch (e: any) { //Questão 14:
    // if (e instanceof AplicacaoError) {
         console.log(e.message) 
    // }
    // if (e instanceof Error) {
    //     console.log("Erro no sistema. Contate o administrador.")
    // }
} finally {
    input("Operação finalizada. Digite 0 para sair.")
}

} while (opcao != "0")
console.log("Aplicação encerrada")

function inserir(): void {
    console.log("\nCadastrar conta\n")
    let numero: string = input("Digite o numero da conta: ")

    if (numero == '') {
        throw new ValorVazioError("Não é permitida a inserção de valores vazios.")
    }
    
    let conta: Conta
    conta = new Conta(numero, 100)
    banco.inserir(conta)
    console.log("Conta inserida.")
}

function consultar(): void {
    console.log("\nConsultar conta\n")
    let numero: string = input("Digite o numero da conta: ")

    if (numero == '') {
        throw new ValorVazioError("Não é permitida a inserção de valores vazios.")
    }

    try { 
        let conta: Conta = banco.consultar(numero)
        console.log("Essa conta existe no sistema!")
        console.log(`
        Numero: ${conta.numero}
        Saldo: ${conta.saldo.toFixed(2)}`) 
    } catch (e: any) {
        throw new ContaInexistenteError("Conta não encontrada!")
    }
}

function sacar(): void {
    console.log("\nSacar valor\n")
    let numero: string = input("Digite o numero da conta: ")
    let valor: number = +input("Digite o valor de saque: ")

    if (numero == '' || valor == 0 || valor == undefined) {
        throw new ValorVazioError("Não é permitida a inserção de valores vazios.")
    }

    if (Number.isNaN(valor)) {
        throw new ConversaoDeValorInvalidaError("Você não digitou um valor numérico para o valor!")
    }

    banco.sacar(numero, valor)
}

function depositar(): void {
    console.log("\nDepositar valor\n")
    let numero: string = input("Digite o numero da conta: ")
    let valor: number = +input("Digite o valor de deposito: ")

    if (numero == '' || valor == 0 || valor == undefined) {
        throw new ValorVazioError("Não é permitida a inserção de valores vazios.")
    }

    if (Number.isNaN(valor)) {
        throw new ConversaoDeValorInvalidaError("Você não digitou um valor numérico para o valor!")
    }

    banco.depositar(numero, valor)
}

function excluir(): void {
    console.log("\nExcluir conta\n")
    let numero: string = input("Digite o numero da conta: ")

    if (numero == '') {
        throw new ValorVazioError("Não é permitida a inserção de valores vazios.")
    }

    try {banco.consultar(numero)
        banco.excluir(numero)
        console.log("Conta excluída com sucesso.")
    } catch {
        throw new ContaInexistenteError("Conta não consta no sistema! Tente novamente.")
    }
    
}

function transferir(): void {
    console.log("\nTransferir valor\n")
    let numeroDebito: string = input("Digite o numero da conta de origem: ")
    let numeroCredito: string = input("Digite o numero da conta de destino: ")
    let valor: number = +input("Digite o valor a ser transferido: ")

    if (numeroDebito == '' || numeroCredito == '' || valor == 0 || valor == undefined) {
        throw new ValorVazioError("Não é permitida a inserção de valores vazios.")
    }

    if (Number.isNaN(valor)) {
        throw new ConversaoDeValorInvalidaError("Você não digitou um valor numérico para o valor!")
    }
    
    try {
        banco.consultar(numeroDebito)
        banco.consultar(numeroCredito)
        banco.transferir(numeroCredito, numeroDebito, valor)
        console.log("Conta excluída com sucesso.")
    } catch {
        throw new ContaInexistenteError("Uma dessas contas não consta no sistema! Tente novamente.")
    }
}

function renderJuros() {
    console.log("\nRender Juros\n")
    let numero: string = input("Digite o numero da conta: ")

    if (numero == '') {
        throw new ValorVazioError("Não é permitida a inserção de valores vazios.")
    }

    banco.renderJuros(numero)
    console.log("Juros renderam!")
}

function cadastrarPoupanca(){
    console.log("\nCadastrar Conta Poupança\n")
    let numero: string = input("Digite o numero da conta: ")

    if (numero == '') {
        throw new ValorVazioError("Não é permitida a inserção de valores vazios.")
    }
    
    let conta: Poupanca
    conta = new Poupanca(numero, 100, 3)
    banco.inserir(conta)
    console.log("Conta inserida.")
}