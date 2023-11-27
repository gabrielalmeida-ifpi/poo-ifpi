"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversaoDeValorInvalidaError = exports.ValorVazioError = void 0;
var questao_7_1 = require("./questao-7");
var ValorVazioError = /** @class */ (function (_super) {
    __extends(ValorVazioError, _super);
    function ValorVazioError(menssagem) {
        return _super.call(this, menssagem) || this;
    }
    return ValorVazioError;
}(questao_7_1.AplicacaoError));
exports.ValorVazioError = ValorVazioError;
var ConversaoDeValorInvalidaError = /** @class */ (function (_super) {
    __extends(ConversaoDeValorInvalidaError, _super);
    function ConversaoDeValorInvalidaError(menssagem) {
        return _super.call(this, menssagem) || this;
    }
    return ConversaoDeValorInvalidaError;
}(questao_7_1.AplicacaoError));
exports.ConversaoDeValorInvalidaError = ConversaoDeValorInvalidaError;
