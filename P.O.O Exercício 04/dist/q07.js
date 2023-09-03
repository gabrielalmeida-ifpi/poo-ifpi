"use strict";
var Triangulo = /** @class */ (function () {
    function Triangulo(lado_a, lado_b, lado_c) {
        this.a = lado_a;
        this.b = lado_b;
        this.c = lado_c;
    }
    Triangulo.prototype.validarTriangulo = function () {
        return this.a < this.b + this.c && this.b < this.a + this.c && this.c < this.a + this.b;
    };
    Triangulo.prototype.ehIsosceles = function () {
        if (this.validarTriangulo() == false) {
            return false;
        }
        return this.a === this.b || this.b === this.c || this.c === this.a;
    };
    Triangulo.prototype.ehEquilatero = function () {
        if (this.validarTriangulo() == false) {
            return false;
        }
        return this.a === this.b && this.b === this.c;
    };
    Triangulo.prototype.ehEscaleno = function () {
        if (this.validarTriangulo() == false) {
            return false;
        }
        return this.a !== this.b && this.b !== this.c && this.c !== this.a;
    };
    return Triangulo;
}());
var triangulo1 = new Triangulo(3, 4, 5);
console.log(triangulo1.ehIsosceles());
console.log(triangulo1.ehEquilatero());
console.log(triangulo1.ehEscaleno());
var triangulo2 = new Triangulo(1, 10, 2);
console.log(triangulo2.ehIsosceles());
console.log(triangulo2.ehEquilatero());
console.log(triangulo2.ehEscaleno());
var triangulo3 = new Triangulo(22, 5, 10);
console.log(triangulo3.ehIsosceles());
console.log(triangulo3.ehEquilatero());
console.log(triangulo3.ehEscaleno());
