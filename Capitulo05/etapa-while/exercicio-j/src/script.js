/**
 * Elaborar um programa que apresente os valores de conversão de graus Celsius 
 * em Fahrenheit,de 10 em 10 graus, iniciando a contagem em 10 graus Celsius 
 * e finalizando em 100 graus Celsius. 
 * O programa deverá apresentar os valores das duas temperaturas.

 */
alert("Bem-vindo!"); 

let celsius=10;

while(celsius<=100){
    let fahrenheit = (9*celsius+160)/5;
    alert(`${celsius}C° equivale a ${fahrenheit}F°`);
    celsius+=10;
}