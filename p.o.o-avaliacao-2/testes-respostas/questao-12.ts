import { AplicacaoError } from "./questao-7";

export class PoupancaInvalidaError extends AplicacaoError {
    constructor(menssagem: string) {
        super(menssagem)
    }
}