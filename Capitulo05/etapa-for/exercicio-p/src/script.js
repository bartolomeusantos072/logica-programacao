/*
Elaborar um programa que apresente os resultados da soma e da média aritmética dos valores
pares situados na faixa numérica de 50 a 70.
*/
alert("Bem-vindo!");
let valores=0,soma=0,media=0; 
let resultado="";
for(let i=50;i<=70;i++){
    if(i % 2 == 0){
        resultado+=`+ ${i} `;
        soma+=i;
        valores++;
    }
}
media=soma/valores;
alert(`${resultado.slice(2)}= ${soma}/${valores} \n media= ${media}`);