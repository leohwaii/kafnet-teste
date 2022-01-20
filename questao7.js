/*/
7) A jornada de trabalho semanal de um funcionário é de 40 horas. O funcionário que trabalhar mais de 40 horas 
receberá hora extra, cujo cálculo é o valor da hora regular com um acréscimo de 50%. Escreva um algoritmo que 
leia o número de horas trabalhadas em um mês, o salário por hora e escreva o salário total do funcionário, que
 deverá ser acrescido das horas extras, caso tenham sido trabalhadas (considere que o mês possua 4 semanas 
 exatas).
 /*/

function calcularSalarioLiquido(salarioHora, horasTrabalhadas) { //função recebera dois valores que sera escrito
    let horasSemanais = 160                       //armazeno a quantidade de horas semanais dentro de uma variavel 40 x 4 = 160 horas
    salarioBruto = horasSemanais * salarioHora   //Preciso saber o salario bruto sem hora extra, então pego o valor da hora multriplico pelo salario hora
    valorPelaHoraExtra = 1.5 * salarioHora       //Calculo o valor da hora extra (1,5 foi retirado da formula 1 = 100%, 5 de 50% 1,5)
    totalDeHorasExtra = horasTrabalhadas - 160  //calcula quantas horas extras o funcionario fez a mais durante o mês
             if (horasTrabalhadas > 160) {                   //Verifica se o funcionario ultrapassou o total de horas padrão mensal 

                   valorAdicional = totalDeHorasExtra * valorPelaHoraExtra   //Aqui eu consigo saber exatamente o valor que deverá ser adicionado ao salario bruto
                   salarioBruto += valorAdicional // Adiciona o valor Adicional ao salario Bruto

                    return `Salario que deverá receber é de  ${salarioBruto.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} e você fez ${totalDeHorasExtra} horas extras`

                } else { 
                    return `Salario que deverá receber é de ${salarioBruto.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} e você não acumulou horas extras`
                }
            }
console.log(calcularSalarioLiquido(8.5, 170)) // Salario que deverá receber é de  R$ 1.487,50 e você fez 10 horas extras
console.log(calcularSalarioLiquido(8.5, 160)) // Salario que deverá receber é de R$ 1.360,00 e você não acumulou horas extras

