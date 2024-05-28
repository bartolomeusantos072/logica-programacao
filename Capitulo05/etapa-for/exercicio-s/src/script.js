/*
Elaborar um programa que apresente o resultado inteiro da divisão de dois números quaisquer.
Para a elaboração do programa, não utilizou em hipótese alguma o conceito do operador 
aritmético ” / ”. A solução deve ser alcançada com a utilização de looping. Ou seja, o 
programa deve apresentar como resultado (quociente) quantas vezes o divisor cabe no dividendo. 

*/
alert("Bem-vindo!"); 
let numerador=parseInt(prompt("Informe o valor:"));
let denominador=parseInt(prompt("informe o valor por qual deseja dividir:"));
let acumulador=0, resto=numerador;
for(let i=denominador;i>0;i--){
    acumulador++;
    if(numerador > denominador){
        numerador= numerador - denominador;
    }else{
        resto=numerador;
    }
}

alert(`o resultado é ${numerador}`);
