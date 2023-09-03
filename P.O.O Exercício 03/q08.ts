function eh_par(numero: number){
    if (numero % 2 == 0){
        return true
    }
    else {return false}
}

const array_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
const array_filtrada = array_1.filter(eh_par)
console.log(array_filtrada)