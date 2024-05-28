/*
Elaborar um programa que apresente no final o somatório dos valores pares
existentes na faixa de 1 até 500. 
*/
alert("Bem-vindo!"); 
let soma=0;
let i=0;
while(i<100){
    if((i+1) % 2==0){
        soma +=(i+1);
    }
    i++;
}
alert(`resultado: ${soma}`);