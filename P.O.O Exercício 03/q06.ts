function exibir(texto: string, ...argumentos: string[]){
    for (let i = 0; i < argumentos.length; i++) {
        const elemento = argumentos[i]
        console.log(elemento)
    }
}

exibir("a", "b")
exibir("a", "b", "c")
exibir("a", "b", "c", "d")