/*/
5) Ler o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem que diga se ela poderá
   ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu).
/*/

function check(birthYear, currentYear) {
    let age = currentYear - birthYear //Ano atual meno o Ano de Nascimento é igual a idade.
    if (age >= 16) { //verifica se a idade é maior ou igual a 16

        return 'Você poderá votar este ano' 
    } else {

        return 'Você ainda não poderá votar este ano'
    }
}

console.log(check(1995, 2022)) //poderá Votar
console.log(check(2010, 2022)) // Não poderá

