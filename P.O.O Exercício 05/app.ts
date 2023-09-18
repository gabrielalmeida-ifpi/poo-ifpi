import prompt from "prompt-sync";
import { Conta, Banco } from "./banco.js";

let input = prompt();
let b: Banco = new Banco();
let opcao: String = '';

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
break
case "2":
consultar();
break
case "3":
sacar();
break
case "4":
depositar();
break
case "5":
excluir();
break
case "6":
transferir();
break
case "7":
retornar_totalizacoes();
break
}
input("Operação finalizada. Digite <enter>");
} while (opcao != "0");
console.log("Aplicação encerrada");












function inserir(): void {
    console.log("\nCadastrar conta\n");

    let numero: string = input('Digite o número da conta: ');
    let conta: Conta;
    conta = new Conta(numero, 'Pessoa', 0);
    
    b.inserir(conta);
    console.log('Conta inserida com sucesso.')
}

function consultar() {
    let numero: string = input('Digite o número da conta: ')
    let contaProcurada!: Conta;
    
     for (let i: number = 0; i < b.contas.length; i++) {
         if (b.contas[i].numero == numero) {
             contaProcurada = b.contas[i];
             break;
         }
     }

     return console.log (`A conta de número ${numero} possui saldo de R$${contaProcurada.saldo}.`)
}

function sacar() {
    let numero: string = input('Digite o número da conta: ')
    let valor: string = input('Digite o valor a sacar: ')
    let valor_numerico = parseFloat(valor);
    let indiceProcurado: number = b.consultarPorIndice(numero);
    
    if (indiceProcurado != -1) {
            let conta: Conta = b.contas[indiceProcurado];
            conta.sacar(valor_numerico);
        
    }
    console.log('Operação de saque realizada com sucesso.')
}

function depositar() {
    let numero: string = input('Digite o número da conta: ')
    let valor: string = input('Digite o valor a transferir: ')
    let valor_numerico = parseFloat(valor);
    let conta_alvo!: Conta;

    for (let i: number = 0; i < b.contas.length; i++) {
        if (b.contas[i].numero == numero) {
            conta_alvo = b.contas[i]
        }
    }
    conta_alvo.depositar(valor_numerico)
    
    console.log('Operação de depósito realizada com sucesso.')
}

function excluir(): void {
    let numero: string = input('Digite o número da conta: ')
    let indiceProcurado = b.consultarPorIndice(numero);

    if (indiceProcurado != -1) {
        for (let i = indiceProcurado; i < b.contas.length; i++) {
            b.contas[i] = b.contas[i+1];
        }
        b.contas.pop();
        
    }
    console.log('Conta excluida com sucesso.')
}

function transferir() {
    let numeroCredito: string = input('Digite o número da conta a receber crédito: ')
    let numeroDebito: string = input('Digite o número da conta ser debitada: ')
    let valor: string = input('Digite o valor da transferência: ')
    let valor_numerico = parseFloat(valor);

    let conta_credito: Conta = b.consultar(numeroCredito)
    let conta_debito: Conta = b.consultar(numeroDebito)

    conta_debito.transferir(conta_credito, valor_numerico)
    console.log('Operação de transferência realizada com sucesso.')
}

function retornar_totalizacoes() {
    let totalizacao: number = 0
    
    for (let i: number = 0; i < b.contas.length; i++) {
        totalizacao += b.contas[i].saldo
    }
    
    return console.log (`No total, o banco armazena R$${totalizacao}.`)
}