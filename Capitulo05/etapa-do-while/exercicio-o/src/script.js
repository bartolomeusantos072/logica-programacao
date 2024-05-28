/*
Elaborar um programa que apresente como resultado o valor da fatorial dos valores
ímpares situados na faixa numérica de 1 a 10.

*/
alert("Bem-vindo!"); 
let resultado="";
let fatorial =1;
let i=0;
    do{
    if((i) % 2==1){
        let j=i;
        do{
            j==0? fatorial*=1: fatorial*=j
        }while(j>-1);
        alert(`${i} fatorial é ${fatorial}`)
        fatorial=1;
        j--;
    }
    i++;
}while(i<10);
