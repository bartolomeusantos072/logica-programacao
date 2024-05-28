/*
Apresentar todos os números inteiros positivos divisíveis por 4 que sejam menores
que 200. Para verificar se o número é divisível por 4, efetue dentro do laço a 
verificação lógica desta condição com a condicional if, perguntando se o número
é divisível; sendo, mostre-o, não sendo, passe para o próximo passo. 
A variável que controlará o contador deverá ser iniciada com valor 1. 

*/
alert("Bem-vindo!"); 
let resultado="";
for(let i=0;i<200;i++){
    if((i+1) % 4==0){
        resultado +=`${(i+1)} ,`;
    }
}
alert(`resultado: ${resultado.slice(0,resultado.length-2)}`);