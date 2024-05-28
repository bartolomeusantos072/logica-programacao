/*
Elaborar um programa que apresente os resultados da soma e da média aritmética dos valores
pares situados na faixa numérica de 50 a 70.
*/
alert("Bem-vindo!");
let valores=0,soma=0,media=0; 
let resultado="";
let i=50;
do{
    if(i % 2 == 0){
        resultado+=`+ ${i} `;
        soma+=i;
        valores++;
    }
    i++;
}while(i<=70);
media=soma/valores;
alert(`${resultado.slice(2)}= ${soma}/${valores} \n media= ${media}`);