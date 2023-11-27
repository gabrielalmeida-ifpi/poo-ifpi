import { AplicacaoError, ContaInexistenteError, SaldoInsuficienteError } from "../testes-respostas/questao-7";
import { PoupancaInvalidaError } from "../testes-respostas/questao-12";
import {Conta, Poupanca} from "./conta"

export class Banco {
	private contas: (Conta | Poupanca)[] = []

	public inserir(conta: Conta | Poupanca): void {
        try {
        let contaConsultada = this.consultar(conta.numero);
        console.log(`Conta ${conta.numero} já cadastrada`);
    } catch (error: any) {
		if (conta instanceof Poupanca) {
			this.contas.push(<Poupanca>conta)
		}
		this.contas.push(conta)
	}
}

	public consultar(numero: String): Conta {
		let contaConsultada: Conta | undefined = undefined
		for (let conta of this.contas) {
			if (conta.numero == numero) {
				contaConsultada = conta;
				break;
			}
		}

        if (!contaConsultada) { //Q.7
            throw new ContaInexistenteError("Conta inexistente! Tente novamente.")
        }

		return contaConsultada;
	}

	public consultarPorIndice(numero: String): number {
		let indice: number = -1;
		for (let i: number = 0; i < this.contas.length; i++) {
			if (this.contas[i].numero == numero) {
				indice = i;
				break;
			}
		}

        if (indice == undefined) { //Q.7
            throw new ContaInexistenteError("Conta inexistente! Tente novamente.")
        }

		return indice;
	}

	public alterar(conta: Conta): void {
		let indice: number = this.consultarPorIndice(conta.numero);
		this.contas[indice] = conta;
	}

	public excluir(numero: string): void {
		let indice: number = this.consultarPorIndice(numero);

		if (indice != -1) {
			for (let i: number = indice; i < this.contas.length; i++) {
				this.contas[i] = this.contas[i + 1];
			}

			this.contas.pop();
		}
	}

	public depositar(numero: String, valor: number): void {
		let contaConsultada = this.consultar(numero);
			contaConsultada.depositar(valor);
	}

	public sacar(numero: String, valor: number): void {
		let contaConsultada = this.consultar(numero);
			contaConsultada.sacar(valor);
	}

	public transferir(numeroCredito: string, numeroDebito: string, valor: number): void {
		let contaCredito = this.consultar(numeroCredito);
		let contaDebito = this.consultar(numeroDebito);
		
        contaDebito.transferir(contaCredito, valor);
	}

	public getTotalDepositado(): number {
		let totalDepositado =
			this.contas.reduce((totalAcumulado: number, conta: Conta) => {
				return totalAcumulado + conta.saldo;
			}, 0);

		return totalDepositado;
	}

	renderJuros(numero: string) {
		let conta: Conta = this.consultar(numero)

        if (!(conta instanceof Poupanca)){
            throw new PoupancaInvalidaError("Essa conta não é uma conta Poupança. Tente novamente.")
        }
        
        conta.renderJuros();
        (conta as Poupanca).renderJuros();
        (<Poupanca> conta).renderJuros()
	}

	public getTotalContas(): number {
		return this.contas.length;
	}

	public getMediaDepositada(): number {
		return this.getTotalDepositado() / this.getTotalContas();
	}

}