import { AplicacaoError } from "./questao-7";

export class ValorVazioError extends AplicacaoError {
    constructor(menssagem: string) {
        super(menssagem)
    }
}

export class ConversaoDeValorInvalidaError extends AplicacaoError {
    constructor(menssagem: string) {
        super(menssagem)
    }
}