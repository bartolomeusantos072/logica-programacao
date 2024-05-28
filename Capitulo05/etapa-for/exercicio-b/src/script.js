/*
Apresentar os resultados de uma tabuada de um número qualquer, 
a qual deve ser impressa no seguinte formato: 
2 X 1 =2 
2 X 2 = 4 
2 X 3 = 6 
2 X 4 = 8 
2 X 5 = 10 
(...) 
2 X 10 = 20 


*/
alert("Bem-vindo!");
let numero=Number(prompt("Qual número você quer saber a tabuada?")); 
let resultado="";
for(let i=0;i<20;i++){
    resultado+=`${numero} x ${i+1} = ${numero* (i+1)}\n`;
}
alert(resultado);