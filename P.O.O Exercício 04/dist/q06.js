"use strict";
var Saudacao = /** @class */ (function () {
    function Saudacao(texto, destinatario) {
        this.texto = texto;
        this.destinatario = destinatario;
    }
    Saudacao.prototype.obterSaudacao = function () {
        var saudacao = "".concat(this.texto, ", ").concat(this.destinatario);
        return saudacao;
    };
    return Saudacao;
}());
var new_saudacao = new Saudacao("Bom dia", "João");
console.log(new_saudacao.obterSaudacao());
