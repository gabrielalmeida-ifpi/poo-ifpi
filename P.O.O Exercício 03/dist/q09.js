"use strict";
var array_2 = [1, 2, 3, 4, 5];
var array_mapeada = array_2.map(function (numero) { return numero * 2; });
console.log(array_mapeada);
var array_reduzida = array_mapeada.reduce(function (acumulador, elemento_atual) { return acumulador + elemento_atual; }, 0);
console.log(array_reduzida);
