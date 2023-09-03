class Circulo {
    r: number = 0;

    calcularArea(): number {
        return 3.14 * this.r ** 2;
    }

    calcularPerimetro(): number {
        return (2 * this.r) * 3.14;
    }
}

let circulo: Circulo;
circulo = new Circulo();
circulo.r = 5;
console.log(circulo.calcularPerimetro());
console.log(circulo.calcularArea());