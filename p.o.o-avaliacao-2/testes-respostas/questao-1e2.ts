let input = require('prompt-sync')();

/* 
1. Enumere os 3 tipos mais comuns de tratamento de erros e exemplifique com
códigos seus ou pesquisados na internet.
*/

let digito: number;
let digitoCorreto: number = 1

function incrementar(numero: number): void {
    numero = numero++
}

//1 - Desconsiderar a Operação

console.log ('Desconsiderar Operação: \n')

do {

digito = parseFloat(input('Digite 1 para uma operação ou 0 para sair: '))

if (digito == digitoCorreto) {
   incrementar(digito)
} //Caso o dígito não seja 1 ou 0, a ação é ignorada, e o app retorna ao estado anterior.

}  while (digito != 0)
console.log ('\n')

/*
Limitações: Não temos certeza se a operação foi realizada ou não.
*/

//2 - Exibir uma mensagem de erro.

console.log ('Exibir Mensagem de Erro: \n')

do {

digito = parseFloat(input('Digite 1 para uma operação ou 0 para sair: '))

if (digito == digitoCorreto) {
    incrementar(digito)
    console.log("Digito correto, a operação ocorrerá.")
} else {
    console.log("Erro! Valor inválido ou opção inexistente! Tente novamente.")
}

}  while (digito != 0)
console.log ('\n')

/*
Limitações: Ficamos limitados ao console. Em uma interface gráfica, onde não poderiamos acessar o console, não
seriamos capazes de ver a mensagem de erro.
*/

//3 - Retornar um código de erro;

console.log ('Retornar Código de Erro: \n')

function incrementarComRetorno(numero: number): boolean {
    if (numero == digitoCorreto) {
        numero = numero++ 
        return true
    }
    return false
}

do {
    digito = parseFloat(input('Digite 1 para uma operação ou 0 para sair: '))
    let incrementou: boolean = incrementarComRetorno(digito)

    if (incrementou) {
        console.log("A operação ocorreu com sucesso.")
    } else if (!incrementou && digito != 0) {
        console.log("Erro! Valor inválido ou opção inexistente! Tente novamente.")
    }
    
}  while (digito != 0)


/*
Limitações: Além de acarretar na mudança do tipo de retorno do método, temos que reservar valores específicos
para poder checá-los e saber o que ocorreu, o que pode gerar problemas. Por exemplo, em uma calculadora,
caso utilizemos números como retorno, é possível um conflito entre o resultado da própria operação matemática e o
número reservado para o tratamento de erro.
*/
