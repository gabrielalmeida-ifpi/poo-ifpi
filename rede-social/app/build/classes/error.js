"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BloquearError = exports.SeguirError = exports.PerfilInexistenteError = exports.AplicacaoError = void 0;
class AplicacaoError extends Error {
    constructor(message) {
        super(message);
    }
}
exports.AplicacaoError = AplicacaoError;
class PerfilInexistenteError extends AplicacaoError {
    constructor(message) {
        super(message);
    }
}
exports.PerfilInexistenteError = PerfilInexistenteError;
class SeguirError extends AplicacaoError {
    constructor(message) {
        super(message);
    }
}
exports.SeguirError = SeguirError;
class BloquearError extends AplicacaoError {
    constructor(message) {
        super(message);
    }
}
exports.BloquearError = BloquearError;
