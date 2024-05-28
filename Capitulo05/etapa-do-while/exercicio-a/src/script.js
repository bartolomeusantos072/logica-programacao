//Apresentar os quadrados dos números inteiros de 15 a 200.

alert("Bem-vindo!");
let i = 15;
let resultado="";
do{
    resultado+=`o quadrado de ${i} é ${(i**2)}\n`;
    i++;
}while(i<201);
alert(resultado);