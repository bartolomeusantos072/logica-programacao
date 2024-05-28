/*
Elaborar um programa que apresente como resultado dos valores de uma potência de uma base qualquer elevada a um expoente qualquer, ou seja, de B^E, em que B é o valor da base e E o valor do expoente começando do zero. Deve ser considerado que :     qualquer número elevado a zero é 1,
    qualquer número elevado a 1 é ele próprio. 
Considere apenas a entrada de valores inteiros e positivos.
*/
alert("Bem-vindo!"); 

let base=parseInt(prompt("Informe um valor para base"));
let potencia = parseInt(prompt("informe o valor da potencia"));
let resultado="";
let i=0;
while(i<potencia+1){
    resultado+=`${base**i} `;
    i++;
}
alert(resultado);