/*
Escreva um programa que apresente a série de Fibonacci até o décimo quinto termo.
A série de Fibonacci é formada pela sequência: 1, 1, 2, 3, 5, 8, 13, 21, 34, ... etc.
Esta série se caracteriza pela soma de um termo posterior com o seu anterior subseqüente.
*/
alert("Bem-vindo!"); 
let resultado="";
let posterior=0,atual=0;anterior=0;
let i=0;
while(i<15){
    if(i==0){
        anterior=1;
    }
    posterior = posterior + anterior;
    anterior= posterior - anterior;
    resultado+=`${posterior}, `; //1,2,3,
    i++;
}
alert(resultado);