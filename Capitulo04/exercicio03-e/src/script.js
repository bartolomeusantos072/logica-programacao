/**
 * Ler três valores numéricos (representados pela variáveis A, B e C) e 
 * efetuar o cálculo da equação completa de segunda grau, utilizando a
 * fórmula de Baskara (considerar todas as possíveis condições para delta:
 * delta < 0, delta > 0 e delta = 0). Lembre se de que é completa a equação
 * de segundo grau que possui simultaneamente as variáveis A, B e C diferentes
 * de zero.
 */

let valorA = parseInt(prompt("informe o valor A")),
    valorB = parseInt(prompt("informe um valor B")),
    valorC = parseInt(prompt("informe o valor C"));
let x1,x2;
let raizDelta = (valorB**2 -4*valorA*valorC)**(1/2);

if(raizDelta==0 || raizDelta > 0){
    x1 = ((-1*valorB) + raizDelta)/2*(valorA);
    x2 = ((-1*valorB) +(-1* raizDelta))/2*(valorA);
    alert(`resultado X1:${x1} X2:${x2}`);
}else{
    alert(`A equação não terá raízes reais já que não há raiz quadrada de número negativo`)
}