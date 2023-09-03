const array_2 = [1, 2, 3, 4, 5]

let array_mapeada = array_2.map((numero: number) => numero * 2)
console.log(array_mapeada)

let array_reduzida = array_mapeada.reduce((acumulador, elemento_atual) => acumulador + elemento_atual, 0)
console.log(array_reduzida)