"use strict";
function nome_pronome(nome, pronome) {
    if (pronome === void 0) { pronome = 'Sr.'; }
    return "".concat(pronome, " ").concat(nome);
}
var nome = 'Gabriel';
console.log(nome_pronome(nome));
