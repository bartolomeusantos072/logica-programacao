alert("Bem-vindo!");
let valorA =Number( prompt("informe o valor da A"));
let valorB =Number( prompt("informe o valor da B"));
alert(`O valor de A é ${valorA} e o de B é:${valorB}`);
let troca=valorA;
valorA=valorB;
valorB=troca;
alert(`Após a troca o valor de A é ${valorA} e o de B é:${valorB}`); 
