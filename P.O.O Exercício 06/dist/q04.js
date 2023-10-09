var Conta = /** @class */ (function () {
    function Conta(_numero, _nome, _saldo) {
        this._numero = _numero;
        this._nome = _nome;
        this._saldo = _saldo;
    }
    Object.defineProperty(Conta.prototype, "numero", {
        get: function () {
            return this._numero;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Conta.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Conta.prototype, "saldo", {
        get: function () {
            return this._saldo;
        },
        enumerable: false,
        configurable: true
    });
    Conta.prototype.depositar = function (valor) {
        this._saldo = this._saldo + valor;
    };
    Conta.prototype.sacar = function (valor) {
        if (this._saldo - valor < 0) {
            return false;
        }
        this._saldo = this._saldo - valor;
        return true;
    };
    Conta.prototype.consultar_Saldo = function () {
        return this._saldo;
    };
    Conta.prototype.transferir = function (contaDestino, valor) {
        if (!this.sacar(valor)) {
            return false;
        }
        contaDestino.depositar(valor);
        return true;
    };
    return Conta;
}());
var Banco = /** @class */ (function () {
    function Banco() {
        this.contas = [];
    }
    Banco.prototype.inserir = function (conta) {
        var ja_existe = false;
        for (var i = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero == conta.numero) {
                ja_existe = true;
            }
        }
        if (ja_existe == false) {
            this.contas.push(conta);
        }
        else {
            console.log('Não foi possível inserir a conta pois seu número já pertence a uma conta existente.');
        }
    };
    Banco.prototype.consultar = function (_numero) {
        var contaProcurada;
        for (var i = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero == _numero) {
                contaProcurada = this.contas[i];
                break;
            }
        }
        return contaProcurada;
    };
    Banco.prototype.consultarPorIndice = function (_numero) {
        var indiceProcurado = -1;
        for (var i = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero == _numero) {
                indiceProcurado = i;
                break;
            }
        }
        return indiceProcurado;
    };
    Banco.prototype.alterar = function (conta) {
        var indiceProcurado = this.consultarPorIndice(conta.numero);
        if (indiceProcurado != -1) {
            this.contas[indiceProcurado] = conta;
        }
    };
    Banco.prototype.excluir = function (_numero) {
        var indiceProcurado = this.consultarPorIndice(_numero);
        if (indiceProcurado != -1) {
            for (var i = indiceProcurado; i < this.contas.length; i++) {
                this.contas[i] = this.contas[i + 1];
            }
            this.contas.pop();
        }
    };
    Banco.prototype.sacar = function (_numero, valor) {
        var indiceProcurado = this.consultarPorIndice(_numero);
        if (indiceProcurado != -1) {
            var conta = this.contas[indiceProcurado];
            conta.sacar(valor);
        }
    };
    Banco.prototype.transferir = function (_numeroCredito, _numeroDebito, valor) {
        var conta_credito = this.consultar(_numeroCredito);
        var conta_debito = this.consultar(_numeroDebito);
        conta_debito.transferir(conta_credito, valor);
    };
    Banco.prototype.retornar_quantidade = function () {
        return this.contas.length;
    };
    Banco.prototype.retornar_valor_total = function () {
        var valor_total = 0;
        for (var i = 0; i < this.contas.length; i++) {
            valor_total += this.contas[i].saldo;
        }
        return valor_total;
    };
    Banco.prototype.retornar_media = function () {
        var soma_dos_valores = this.retornar_valor_total();
        var quantidade_de_contas = this.retornar_quantidade();
        var media = soma_dos_valores / quantidade_de_contas;
        return media;
    };
    return Banco;
}());
var banco = new Banco();
// Inserir algumas contas no banco
banco.inserir(new Conta('1', 'João', 1000));
banco.inserir(new Conta('2', 'Maria', 500));
banco.inserir(new Conta('3', 'Pedro', 1500));
// Consultar uma conta pelo número
var contaMaria = banco.consultar('2');
console.log('Conta de Maria:', contaMaria);
// Realizar operações nas contas
contaMaria.depositar(300);
console.log('Saldo de Maria após depósito:', contaMaria.saldo);
contaMaria.sacar(200);
console.log('Saldo de Maria após saque:', contaMaria.saldo);
var contaPedro = banco.consultar('3');
console.log('Saldo de Pedro antes da transferência:', contaPedro.saldo);
banco.transferir('2', '3', 200);
console.log('Saldo de Pedro após a transferência:', contaPedro.saldo);
// Excluir uma conta
console.log('Número de contas antes da exclusão:', banco.retornar_quantidade());
banco.excluir('1');
console.log('Número de contas após a exclusão:', banco.retornar_quantidade());
// Calcular valor total e média de saldos das contas no banco
console.log('Valor total de todos os saldos:', banco.retornar_valor_total());
console.log('Média dos saldos:', banco.retornar_media());
export {};
