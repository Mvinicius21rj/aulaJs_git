/*                    QUESTÃO 2 (18/07)
2 - Elabore um algoritmo que receba um número (1-7) e devolva o dia 
da semana correspondente*/ 

let rs = require ('readline-sync');

let = num = parseInt(rs.question('Digite um numero de 1 ate 7:'))

if (num === 1){
    console.log("1 = Domingo")
} else if (num === 2){
    console.log("2 = Segunda-Feira")
} else if (num === 3){
    console.log("3 = Terça-Feira")
} else if (num === 4){
    console.log("4 = Quarta-Feira")
} else if (num === 5){
    console.log("5 = Quinta-Feira")
} else if (num === 6){
    console.log("6 = Sexta-Feira")
} else if (num === 7){
    console.log("7 = Sábado")
} else{
    console.log(" Não existe um dia na semana correspondente!")
}