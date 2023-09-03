class Conta {
    numero: string;
    saldo: number;
    constructor(numero: string, saldo: number) {
        this.numero = numero;
        this.saldo = saldo;
    }
    sacar(valor: number) {
        if (this.saldo - valor < 0) {
            return false;
        }
        else{
            this.saldo = this.saldo - valor;
            return true;
        }
    }
    depositar(valor: number): void {
        this.saldo = this.saldo + valor;
    }
    consultarSaldo(): number {
        return this.saldo;
    }
    transferir(conta_alvo: Conta, valor: number) {
        if (!this.sacar(valor)){
            return false;
        }
        else {
            this.sacar(valor);
            this.depositar(valor);
            conta_alvo.depositar(valor);
            return true;
        }
    }
}

let c1: Conta = new Conta("1", 100);
let c2: Conta = new Conta("2", 100);

c1.sacar(101);
c1.transferir(c2, 200);
console.log(c1.consultarSaldo());
console.log(c2.consultarSaldo());

c1.sacar(10); 
c1.transferir(c2, 20); 
console.log(c1.consultarSaldo()); //90
console.log(c2.consultarSaldo()); //70, 120