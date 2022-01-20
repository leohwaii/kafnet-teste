/*/
1) Escreva um algoritmo que armazene o valor 25 em uma variável A e o valor 47 em uma variável B. 
A seguir (utilizando apenas atribuições entre variáveis) troque os seus conteúdos fazendo com que o valor 
que está em A passe para B e vice-versa. Ao final, escrever os valores que ficaram armazenados nas variáveis.
/*/

var a = 25 //armazeno valor de a
var b = 47 //armazeno o valor b
var aux = a //guardo o valor de a

a = b //passo o valor de a para b
b = aux //passo o valor que A guardou em AUX e adiciono em B

console.log('valor de a é:' ,a) //47
console.log('valor de b é:', b) //25