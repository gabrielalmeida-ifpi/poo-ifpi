class Conta {
    numero: string;
    nome: string
    saldo: number;

    constructor(numero: string, nome: string, saldo: number) {
        this.numero = numero;
        this.nome = nome;
        this.saldo = saldo;
    }

    depositar(valor: number): void {
        this.saldo = this.saldo + valor;
    }

    sacar(valor: number): boolean {
        if (this.saldo - valor < 0) {
            return false;
        }

        this.saldo = this.saldo - valor;
        return true;
    }

    consultarSaldo(): number {
        return this.saldo;
    }

    transferir(contaDestino: Conta, valor: number): boolean {
        if (!this.sacar(valor)) {
            return false;
        }

        contaDestino.depositar(valor);
        return true;
    }
}

class Banco {
    contas: Conta[] = []

    inserir(conta: Conta): void {
        let ja_existe: boolean = false;
        for (let i: number = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero == conta.numero) {
                ja_existe = true
            }
        }
        if (ja_existe == false) {
        this.contas.push(conta);
        }
        else {
            console.log('Não foi possível inserir a conta pois seu número já pertence a uma conta existente.')
        }
    }

    consultar(numero: string): Conta {
        let contaProcurada!: Conta;

        for (let i: number = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero == numero) {
                contaProcurada = this.contas[i];
                break;
            }
        }

        return contaProcurada;
    }

    consultarPorIndice(numero: string): number {
        let indiceProcurado: number = -1;

        for (let i: number = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero == numero) {
                indiceProcurado = i;
                break;
            }
        }

        return indiceProcurado;
    }

    alterar(conta: Conta): void {
        let indiceProcurado: number =
                this.consultarPorIndice(conta.numero);
        
        if (indiceProcurado != -1) {
            this.contas[indiceProcurado] = conta;
        }
    }

    excluir(numero: string): void {
        let indiceProcurado = this.consultarPorIndice(numero);

        if (indiceProcurado != -1) {
            for (let i = indiceProcurado; i < this.contas.length; i++) {
                this.contas[i] = this.contas[i+1];
            }
            this.contas.pop();
            
        }
    }

    sacar(numero: string, valor: number): void {
        let indiceProcurado: number = this.consultarPorIndice(numero);

        if (indiceProcurado != -1) {
            let conta: Conta = this.contas[indiceProcurado];
            conta.sacar(valor);
        }
    }

    transferir(numeroCredito: string, numeroDebito: string, valor: number) {
        let conta_credito: Conta = this.consultar(numeroCredito)
        let conta_debito: Conta = this.consultar(numeroDebito)

        conta_debito.transferir(conta_credito, valor)
    }

    retornar_quantidade() {
        return this.contas.length
    }

    retornar_valor_total() {
        let valor_total: number = 0

        for (let i: number = 0; i < this.contas.length; i++) {
            valor_total += this.contas[i].saldo
        }

        return valor_total
    }

    retornar_media() {
        let soma_dos_valores: number = this.retornar_valor_total()
        let quantidade_de_contas: number = this.retornar_quantidade()
        let media: number = soma_dos_valores / quantidade_de_contas

        return media
    }
}

export { Conta, Banco };