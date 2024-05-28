/*
Elaborar um programa que apresente como resultado o valor da fatorial dos valores
ímpares situados na faixa numérica de 1 a 10.

*/
alert("Bem-vindo!"); 
let resultado="";
let fatorial =1;
let i=0;
    while(i<10){
    if((i) % 2==1){
        let j=i;
        while(j>-1){
            j==0? fatorial*=1: fatorial*=j
        }
        alert(`${i} fatorial é ${fatorial}`)
        fatorial=1;
        j--;
    }
    i++;
}
