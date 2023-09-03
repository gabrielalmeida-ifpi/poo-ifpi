"use strict";
var Jogador = /** @class */ (function () {
    function Jogador(forca, nivel, pontos_atuais) {
        this.forca = forca;
        this.nivel = nivel;
        this.pontos_atuais = pontos_atuais;
    }
    Jogador.prototype.calcularAtaque = function () {
        return this.forca * this.nivel;
    };
    Jogador.prototype.atacar = function (jogador_atacado) {
        if (!jogador_atacado.estaVivo()) {
            return;
        }
        else {
            jogador_atacado.pontos_atuais = jogador_atacado.pontos_atuais - this.forca;
        }
    };
    Jogador.prototype.estaVivo = function () {
        if (this.pontos_atuais > 0) {
            return true;
        }
        else {
            return false;
        }
    };
    Jogador.prototype.toString = function () {
        return "\n        For\u00E7a: ".concat(this.forca, "\n        N\u00EDvel: ").concat(this.nivel, "\n        Pontos: ").concat(this.pontos_atuais);
    };
    return Jogador;
}());
var player_1 = new Jogador(50, 70, 100);
var player_2 = new Jogador(25, 50, 100);
player_1.atacar(player_2);
player_2.atacar(player_1);
console.log(player_1.toString());
console.log(player_2.toString());
