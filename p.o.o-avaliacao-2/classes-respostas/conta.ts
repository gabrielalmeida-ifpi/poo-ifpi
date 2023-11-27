import { error } from "console";
import { ValorInvalidoError } from "../testes-respostas/questao-10";

export class Conta {
	private _numero: string;
	private _saldo: number;

	constructor(numero: string, saldoInicial: number) {
		if (saldoInicial < 0) { 
			throw error('Erro! Você inseriu um valor de saldo negativo.') //Q.6
		}
		this.depositar(saldoInicial) //Q.10
		this._numero = numero;
		this._saldo = saldoInicial;
	}

	validarValor(valor: number){ //validarValor da Q. 11
		if (valor == 0 || valor < 0) {
			throw new ValorInvalidoError("Valor inválido! Valores menores ou iguais a zero não são permitidos.")
		}
	}

	sacar(valor: number): void { //Sacar com exceção das Q. 3 e 4):
	this.validarValor(valor) // Q.11
    if (this._saldo < valor) { 
        throw new Error('Saldo insuficiente.')
	}

    this._saldo = this._saldo - valor
    }

	depositar(valor: number): void {
		this.validarValor(valor) // Q.11
		this._saldo = this._saldo + valor;
	}

	transferir(contaDestino: Conta, valor: number): void {
		this.sacar(valor);
		contaDestino.depositar(valor);
	}

	get numero(): string {
		return this._numero;
	}

	get saldo(): number {
		return this._saldo;
	}

}

export class Poupanca extends Conta {
	private _taxaDeJuros: number;

	constructor(numero: string, saldo: number, taxaDeJuros: number) {
		super(numero, saldo);
		this._taxaDeJuros = taxaDeJuros;
	}

	renderJuros(): void {
		let juros: number = (this.saldo * this._taxaDeJuros / 100);
		this.depositar(juros);
	}

	get taxaDeJuros(): number {
		return this._taxaDeJuros;
	}
}