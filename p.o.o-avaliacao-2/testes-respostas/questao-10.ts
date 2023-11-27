import { AplicacaoError } from "./questao-7";

export class ValorInvalidoError extends AplicacaoError {
    constructor(message: string) {
        super(message)
    }
}