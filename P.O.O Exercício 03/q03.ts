function nome_pronome(nome: string, pronome: string = 'Sr.'){
    return `${pronome} ${nome}`

}

let nome: string = 'Gabriel'
console.log(nome_pronome(nome))
