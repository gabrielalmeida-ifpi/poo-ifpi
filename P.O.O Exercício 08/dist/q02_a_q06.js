var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, sobrenome) {
        this._nome = nome;
        this._sobrenome = sobrenome;
    }
    Object.defineProperty(Pessoa.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pessoa.prototype, "sobrenome", {
        get: function () {
            return this._sobrenome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pessoa.prototype, "nome_completo", {
        get: function () {
            return this.nome + this.sobrenome;
        },
        enumerable: false,
        configurable: true
    });
    return Pessoa;
}());
var Funcionario = /** @class */ (function (_super) {
    __extends(Funcionario, _super);
    function Funcionario(nome, sobrenome, matricula, salario) {
        var _this = _super.call(this, nome, sobrenome) || this;
        _this._matricula = matricula;
        _this._salario = salario;
        return _this;
    }
    Object.defineProperty(Funcionario.prototype, "matricula", {
        get: function () {
            return this._matricula;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Funcionario.prototype, "salario", {
        get: function () {
            return this._salario;
        },
        enumerable: false,
        configurable: true
    });
    Funcionario.prototype.calcular_salario_primeira_parcela = function () {
        return this._salario * 60 / 100;
    };
    Funcionario.prototype.calcular_salario_segunda_parcela = function () {
        return this._salario * 40 / 100;
    };
    return Funcionario;
}(Pessoa));
var Professor = /** @class */ (function (_super) {
    __extends(Professor, _super);
    function Professor(nome, sobrenome, matricula, salario, titulacao) {
        var _this = _super.call(this, nome, sobrenome, matricula, salario) || this;
        _this._titulacao = titulacao;
        return _this;
    }
    Professor.prototype.calcular_salario_primeira_parcela = function () {
        return this.salario;
    };
    Professor.prototype.calcular_salario_segunda_parcela = function () {
        return 0;
    };
    return Professor;
}(Funcionario));
var Folha_de_Pagamento = /** @class */ (function () {
    function Folha_de_Pagamento(pagamentos) {
        this.pagamentos = pagamentos;
    }
    Folha_de_Pagamento.prototype.calcular_pagamentos = function () {
        var total_de_pagamentos = 0;
        for (var i = 0; i < this.pagamentos.length; i++) {
            total_de_pagamentos += this.pagamentos[i].salario;
        }
        return total_de_pagamentos;
    };
    return Folha_de_Pagamento;
}());
var pessoa = new Pessoa("João", "Silva");
console.log(pessoa.nome_completo);
var funcionario = new Funcionario("Maria", "Souza", "12345", 5000);
console.log(funcionario.calcular_salario_primeira_parcela());
console.log(funcionario.calcular_salario_segunda_parcela());
var professor = new Professor("José", "Pereira", "67890", 6000, "Doutor");
console.log(professor.calcular_salario_primeira_parcela());
console.log(professor.calcular_salario_segunda_parcela());
var folhaDePagamento = new Folha_de_Pagamento([funcionario, professor]);
console.log(folhaDePagamento.calcular_pagamentos());
export {};
