"use strict";
function mostrar_array(array) {
    var texto = '';
    for (var i = 0; i < array.length; i++) {
        texto += array[i];
        if (i != (array.length - 1)) {
            texto += '-';
        }
    }
    return texto;
}
var array = [1, 2, 3, 4, 5];
console.log(mostrar_array(array));
