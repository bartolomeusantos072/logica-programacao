//Elaborar um programa que efetue a leitura de 10 valores numéricos 
//e apresente no final o total do somatório e a média dos valores lidos. 

alert("Bem-vindo!"); 
let num=0,soma=0, media=0;
let i=0;
while(i<10){
    num=Number(prompt("informe o valor"));
    soma+=num;
    i++;
}
media=soma/10;
alert(`o somatorio foi ${soma} e a média é: ${media}`);