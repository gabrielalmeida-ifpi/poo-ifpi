"use strict";
/**
 * 7. Refaça a questão 04 do exercício usando interfaces com os métodos propostos
 * em vez de herança. Crie também um script que instancie e teste diferentes formas
 * geométricas.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TesteFiguras = exports.Circulo = exports.Triangulo = exports.Quadrado = void 0;
var Quadrado = /** @class */ (function () {
    function Quadrado(_lado) {
        this._lado = _lado;
    }
    Quadrado.prototype.calcularArea = function () {
        return this._lado * this._lado;
    };
    Quadrado.prototype.calcularPerimetro = function () {
        return 4 * this._lado;
    };
    Object.defineProperty(Quadrado.prototype, "lado", {
        get: function () {
            return this._lado;
        },
        enumerable: false,
        configurable: true
    });
    Quadrado.prototype.comparar = function (figura) {
        if (this.calcularArea() == figura.calcularArea()) {
            return 0;
        }
        else if (this.calcularArea() > figura.calcularArea()) {
            return 1;
        }
        else {
            return -1;
        }
    };
    return Quadrado;
}());
exports.Quadrado = Quadrado;
// considerando um triangulo equilatero
var Triangulo = /** @class */ (function () {
    function Triangulo(_lado) {
        this._lado = _lado;
    }
    Triangulo.prototype.calcularArea = function () {
        var altura = (Math.sqrt(3) / 2) * this._lado;
        return (this._lado * altura) / 2;
    };
    Triangulo.prototype.calcularPerimetro = function () {
        return 3 * this._lado;
    };
    Object.defineProperty(Triangulo.prototype, "lado", {
        get: function () {
            return this._lado;
        },
        enumerable: false,
        configurable: true
    });
    Triangulo.prototype.comparar = function (figura) {
        if (this.calcularArea() == figura.calcularArea()) {
            return 0;
        }
        else if (this.calcularArea() > figura.calcularArea()) {
            return 1;
        }
        else {
            return -1;
        }
    };
    return Triangulo;
}());
exports.Triangulo = Triangulo;
var Circulo = /** @class */ (function () {
    function Circulo(_raio) {
        this._raio = _raio;
    }
    Circulo.prototype.calcularArea = function () {
        return Math.PI * Math.pow(this._raio, 2);
    };
    Circulo.prototype.calcularPerimetro = function () {
        return 2 * Math.PI * this._raio;
    };
    Object.defineProperty(Circulo.prototype, "raio", {
        get: function () {
            return this._raio;
        },
        enumerable: false,
        configurable: true
    });
    Circulo.prototype.comparar = function (figura) {
        if (this.calcularArea() == figura.calcularArea()) {
            return 0;
        }
        else if (this.calcularArea() > figura.calcularArea()) {
            return 1;
        }
        else {
            return -1;
        }
    };
    return Circulo;
}());
exports.Circulo = Circulo;
var TesteFiguras = /** @class */ (function () {
    function TesteFiguras(figura1, figura2) {
        this.figura1 = figura1;
        this.figura2 = figura2;
    }
    TesteFiguras.prototype.compara = function () {
        return this.figura1.comparar(this.figura2);
    };
    return TesteFiguras;
}());
exports.TesteFiguras = TesteFiguras;
//Script - Questão 7
var quadrado = new Quadrado(5);
var triangulo = new Triangulo(3);
var circulo = new Circulo(7);
console.log("Teste - Questão 7:");
console.log("Quadrado:");
console.log("Lado: ".concat(quadrado.lado));
console.log("\u00C1rea: ".concat(quadrado.calcularArea()));
console.log("Per\u00EDmetro: ".concat(quadrado.calcularPerimetro()));
console.log("\n");
console.log("Triângulo:");
console.log("Lado: ".concat(triangulo.lado));
console.log("\u00C1rea: ".concat(triangulo.calcularArea()));
console.log("Per\u00EDmetro: ".concat(triangulo.calcularPerimetro()));
console.log("\n");
console.log("Círculo:");
console.log("Raio: ".concat(circulo.raio));
console.log("\u00C1rea: ".concat(circulo.calcularArea()));
console.log("Per\u00EDmetro: ".concat(circulo.calcularPerimetro()));
/////////////////////////////////////////////////////////////////////////
//Script - Questão 8
console.log("\n");
console.log("Teste - Questão 8:");
var quadrado2 = new Quadrado(6.1);
var quadrado3 = new Quadrado(6.1);
var triangulo2 = new Triangulo(4.5);
var circulo2 = new Circulo(8.7);
var teste1 = new TesteFiguras(quadrado2, quadrado3);
console.log(teste1.compara());
var teste2 = new TesteFiguras(circulo2, triangulo2);
console.log(teste2.compara());
var teste3 = new TesteFiguras(quadrado2, triangulo2);
console.log(teste3.compara());
var teste4 = new TesteFiguras(triangulo2, circulo2);
console.log(teste4.compara());
