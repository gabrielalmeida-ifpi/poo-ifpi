class Triangulo {
    a: number;
    b: number;
    c: number;

    constructor(lado_a: number, lado_b: number, lado_c: number){
        this.a = lado_a
        this.b = lado_b
        this.c = lado_c
    }

    validarTriangulo(){
        return this.a < this.b + this.c && this.b < this.a + this.c && this.c < this.a + this.b
    }

    ehIsosceles() {
        if (this.validarTriangulo() == false) {
          return false
        }
    
        return this.a === this.b || this.b === this.c || this.c === this.a
      }
    
      ehEquilatero() {
        if (this.validarTriangulo() == false) {
          return false
        }

        return this.a === this.b && this.b === this.c
      }
    
      ehEscaleno() {
        if (this.validarTriangulo() == false) {
          return false
        }
    
        return this.a !== this.b && this.b !== this.c && this.c !== this.a
      }

    }

const triangulo1 = new Triangulo(3, 4, 5)
console.log(triangulo1.ehIsosceles())
console.log(triangulo1.ehEquilatero())
console.log(triangulo1.ehEscaleno())

const triangulo2 = new Triangulo(1, 10, 2)
console.log(triangulo2.ehIsosceles())
console.log(triangulo2.ehEquilatero())
console.log(triangulo2.ehEscaleno())

const triangulo3 = new Triangulo(22, 5, 10)
console.log(triangulo3.ehIsosceles())
console.log(triangulo3.ehEquilatero())
console.log(triangulo3.ehEscaleno())