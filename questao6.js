/*/
   6) Ler dois valores (considere que não serão lidos valores iguais) e escrever o maior deles. 
/*/

//função que compara dois valores usando condicionais. 
function compara(valor1, valor2) {
    if (valor1 > valor2) { 

        return `O maior numero é ${valor1}`
    }else if (valor1 < valor2) {
        return `O maior numero é ${valor2}`
    }else (valor1 == valor2)

    return 'Os valores não Podem Ser Iguais! Por favor digite numeros diferentes'
}


console.log(compara(2, 1))
console.log(compara(2, 2))
console.log(compara(1, 4))