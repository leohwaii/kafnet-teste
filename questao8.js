/*/
8) Ler 3 valores (A, B e C) representando as medidas dos lados de um triângulo e escrever se formam ou não um triângulo.
OBS: para formar um triângulo, o valor de cada lado deve ser menor que a soma dos outros 2 lados.
/*/

function triangulo(a, b, c) {
    if ((a == 0 || b == 0 || c == 0) || (a + b < c || a + c < b || b + c < a)) {  // faço todas as condições que seja diferente de um triangulo
        return 'Os valores não são lados de um triângulo'
    } else {
        return 'Os Valores são lados de um triângulo'
    }
}
console.log(triangulo(2, 3, 4)) //verdadeiro
console.log(triangulo(20, 20, 20)) //verdadeiro
console.log(triangulo(0, 4, 8)) //falso
console.log(triangulo(3, 4, 20)) //falso