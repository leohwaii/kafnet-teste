/*/
2) Ler um valor e escrever a mensagem É MAIOR QUE 10! 
  se o valor lido for maior que 10, caso contrário escrever NÃO É MAIOR QUE 10!
/*/

//Função onde eu passo o parametro "valor"
function condicao(value){
  if(value <= 10){ //verifico se o valor passado é maior ou igual a 10

     return 'NÃO É MAIOR QUE 10!' //retorno da função

   } 
    else
   
    return 'É MAIOR QUE 10!'  //retorno da função
}

//Executando e testando no console a função
console.log(condicao(19))  
console.log(condicao(8))
console.log(condicao(0))
console.log(condicao(-2)) 