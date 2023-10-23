class Empregado {
    salario: number = 500;

    calcularSalario(): number { 
        return this.salario
    }
}

class Diarista extends Empregado {
    calcularSalario(): number {
        let valor_ajustado: number = super.calcularSalario() / 30;
        return valor_ajustado
     }
}

class Horista extends Diarista {
    calcularSalario(): number { 
        let valor_ajustado: number = super.calcularSalario() / 24;
        return valor_ajustado
    }
}