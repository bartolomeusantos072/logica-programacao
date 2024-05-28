/*
Apresentar todos os valores numéricos inteiros ímpares situados na faixa de 0 a 20.
Para verificar se o número é ímpar, efetue dentro da malha a verificação lógica 
desta condição com a condicional if (if), verificando se o número é ímpar; sendo,
 mostre-o, não sendo, passe para o próximo passo.
*/
alert("Bem-vindo!"); 
let resultado="";
let i=0;
    while(i<21){
    if((i) % 2==1){
        resultado +=`${(i)} ,`;
    }
    i++;
}
alert(`resultado: ${resultado.slice(0,resultado.length-2)}`);