/*
Elaborar um programa que apresente como resultado o valor da fatorial dos valores
ímpares situados na faixa numérica de 1 a 10.

*/
alert("Bem-vindo!"); 
let resultado="";
let fatorial =1;
for(let i=0;i<10;i++){
    if((i) % 2==1){
        for(let j=i;j>-1;j--){
            j==0? fatorial*=1: fatorial*=j
        }
        alert(`${i} fatorial é ${fatorial}`)
        fatorial=1;
    }
}
