"use strict";
function eh_par(numero) {
    if (numero % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}
var array_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var array_filtrada = array_1.filter(eh_par);
console.log(array_filtrada);
