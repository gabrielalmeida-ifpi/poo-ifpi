import { Conta } from './banco.js';
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
    Banco.prototype.consultar = function (numero) {
        var contaProcurada;
        for (var i = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero == numero) {
                contaProcurada = this.contas[i];
                break;
            }
        }
        return contaProcurada;
    };
    Banco.prototype.consultarPorIndice = function (numero) {
        var indiceProcurado = -1;
        for (var i = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero == numero) {
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
    Banco.prototype.excluir = function (numero) {
        var indiceProcurado = this.consultarPorIndice(numero);
        if (indiceProcurado != -1) {
            for (var i = indiceProcurado; i < this.contas.length; i++) {
                this.contas[i] = this.contas[i + 1];
            }
            this.contas.pop();
        }
    };
    Banco.prototype.sacar = function (numero, valor) {
        var indiceProcurado = this.consultarPorIndice(numero);
        if (indiceProcurado != -1) {
            var conta = this.contas[indiceProcurado];
            conta.sacar(valor);
        }
    };
    Banco.prototype.transferir = function (numeroCredito, numeroDebito, valor) {
        var conta_credito = this.consultar(numeroCredito);
        var conta_debito = this.consultar(numeroDebito);
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
var b = new Banco();
b.inserir(new Conta("11111-2", "ely", 100));
//console.log(b.consultar("11111-2"));
//console.log(b.consultar("22222-2"));
var contaAlterada = b.consultar("11111-2");
contaAlterada.nome = "ely da silva miranda";
b.alterar(contaAlterada);
//console.log(b.consultar("11111-2"));
b.inserir(new Conta("22222-2", "joao", 200));
b.inserir(new Conta("33333-3", "maria", 300));
//console.log(b.contas);
//b.excluir("11111-2");
b.sacar("33333-3", 50);
console.log(b.consultar("33333-3"));
