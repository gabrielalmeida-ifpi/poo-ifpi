class SituacaoFinanceira {
    valorCreditos: number = 0;
    valorDebitos: number = 0;

    saldo(): number {
       return this.valorCreditos - this.valorDebitos;
    }
}

let situacao_financeira: SituacaoFinanceira;
situacao_financeira = new SituacaoFinanceira();
situacao_financeira.valorCreditos = 20;
situacao_financeira.valorDebitos = 10;
console.log(situacao_financeira.saldo());





