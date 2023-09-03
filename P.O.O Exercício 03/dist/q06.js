"use strict";
function exibir(texto) {
    var argumentos = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        argumentos[_i - 1] = arguments[_i];
    }
    for (var i = 0; i < argumentos.length; i++) {
        var elemento = argumentos[i];
        console.log(elemento);
    }
}
exibir("a", "b");
exibir("a", "b", "c");
exibir("a", "b", "c", "d");
