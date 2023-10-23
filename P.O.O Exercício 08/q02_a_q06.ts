class Pessoa {
    private _nome: string;
    private _sobrenome: string;

    constructor(nome: string, sobrenome: string){
        this._nome = nome
        this._sobrenome = sobrenome
    }

    get nome(){
        return this._nome
    }

    get sobrenome(){
        return this ._sobrenome
    }

    get nome_completo(){
        return this.nome + this.sobrenome
    }

}

class Funcionario extends Pessoa {
    private _matricula: string;
    private _salario: number;

    constructor(nome: string, sobrenome: string, matricula: string, salario: number){
        super(nome, sobrenome)
        this._matricula = matricula
        this._salario = salario
    }

    get matricula(){
        return this._matricula
    }

    get salario(){
        return this ._salario
    }

    calcular_salario_primeira_parcela(): number{
        return this._salario * 60/100
    }

    calcular_salario_segunda_parcela(): number{
        return this._salario * 40/100
    }
}

class Professor extends Funcionario {
    private _titulacao: string;

    constructor(nome: string, sobrenome: string, matricula: string, salario: number, titulacao: string){
        super(nome, sobrenome, matricula, salario)
        this._titulacao = titulacao
    }

    calcular_salario_primeira_parcela(): number {
        return this.salario
    }

    calcular_salario_segunda_parcela(): number {
        return 0
    }
}

class Folha_de_Pagamento {
    pagamentos: (Funcionario | Professor)[];

    constructor(pagamentos: (Funcionario | Professor)[]){
        this.pagamentos = pagamentos
    }

    calcular_pagamentos(): number{
        let total_de_pagamentos = 0;

        for (let i = 0; i < this.pagamentos.length; i++) {
            total_de_pagamentos += this.pagamentos[i].salario
        }

        return total_de_pagamentos
    }

}

let pessoa = new Pessoa("João", "Silva")
console.log(pessoa.nome_completo)

let funcionario = new Funcionario("Maria", "Souza", "12345", 5000)
console.log(funcionario.calcular_salario_primeira_parcela())
console.log(funcionario.calcular_salario_segunda_parcela())

let professor = new Professor("José", "Pereira", "67890", 6000, "Doutor")
console.log(professor.calcular_salario_primeira_parcela())
console.log(professor.calcular_salario_segunda_parcela())

let folhaDePagamento = new Folha_de_Pagamento([funcionario, professor])
console.log(folhaDePagamento.calcular_pagamentos())