var Hora = /** @class */ (function () {
    function Hora(hora, minutos, segundos) {
        this.hora = hora;
        this.minutos = minutos;
        this.segundos = segundos;
    }
    Hora.prototype.ler_hora = function () {
        console.log("S\u00E3o ".concat(this.hora, " horas.\n"));
    };
    Hora.prototype.ler_minutos = function () {
        console.log("".concat(this.minutos, " minutos.\n"));
    };
    Hora.prototype.ler_segundos = function () {
        console.log("".concat(this.segundos, " segundos.\n"));
    };
    Hora.prototype.ler_horario = function () {
        console.log("O hor\u00E1rio \u00E9 ".concat(this.hora, ":").concat(this.minutos, ":").concat(this.segundos, ".\n"));
    };
    return Hora;
}());
var hora = new Hora(22, 30, 45);
hora.ler_hora();
hora.ler_minutos();
hora.ler_segundos();
hora.ler_horario();
export {};
