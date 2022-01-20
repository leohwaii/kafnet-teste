/*/
4) Ler as notas da 1a. e 2a. avaliações de um aluno. Calcular a média aritmética simples
 e escrever uma mensagem que diga se o aluno foi ou não aprovado (considerar que nota igual 
ou maior que 6 o aluno é aprovado). Escrever também a média calculada
/*/

//função para calcular media de duas notas
function noteFinal(note1, note2) { //pasei os valores como parametros
   let media = (note1 + note2) / 2 // seguindo a formula de calculo de média
   resultado = media.toString().replace('.', ','); //Converte o valor de média para string e faz a substitução de 'ponto' para 'Virgula' depois guarda o valor dela dentro da variavel resultado
   if (resultado >= 6) { //verifico se a nota é maior ou igual a 6
      return `O Aluno foi aprovado com nota ${resultado}.` //caso a nota seja maior que 6 a condição é verdadeira, aqui usei o Template String para formar o retorno da função
   } else {
      return `O aluno  foi reprovado e sua nota final foi de: ${resultado}.` //Caso a condição seja falsa, o aluno está reprovado.
   }
}
console.log(noteFinal(5.5, 4.3)) //Reprovado
console.log(noteFinal(5, 6)) // Reprovado
console.log(noteFinal(2, 10)) // Aprovado
console.log(noteFinal(8.5, 9.5)) //Aprovado