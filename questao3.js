//3) Ler um valor e escrever se é positivo ou negativo (considere o valor zero como positivo).

//Função Oparation recebe um parametro valor(value)
function operation(value) {
   if (value <= -1) {  //como o 0 é considerado positivo logo eu verifico se o numero passado é menor ou igual a -1
      return 'negativo' 
   } else {  //Entao se 0 que é maior que -1 to valor acima de -1 é considerado positivo
     return 'positivo'
   }
}
console.log(operation(-1)) // negativo
console.log(operation(-20))// negativo
console.log(operation(0))  // positivo
console.log(operation(20))// positivo   