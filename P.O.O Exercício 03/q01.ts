function main() {

    let numero: number = 1
    console.log(par_ou_impar(numero))
    numero = 2
    console.log(par_ou_impar(numero))

}

function par_ou_impar(numero: number){
    if (numero % 2 == 0){
        return true
    }
    else {return false}
}

main()