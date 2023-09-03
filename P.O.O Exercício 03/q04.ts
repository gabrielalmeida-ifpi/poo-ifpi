function mostrar_array(array: Array<number>){
    let texto: string = ''
    for (let i = 0; i < array.length; i++) {
        texto += array[i]

        if (i != (array.length - 1)){
        texto += '-'
        }
        
    }
    return texto
}

let array: Array<number> = [1, 2, 3, 4, 5]
console.log(mostrar_array(array))