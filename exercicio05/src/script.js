alert("Bem-vindo!"); 
let valor = prompt("informe o valor da prestação");
let taxa = prompt("informe o valor da taxa");
let tempo=prompt("qual o tempo de atraso?");
let prestacao = valor+(valor*(taxa/100)*tempo);
alert(`O valor de uma prestação em atraso é: ${prestacao}`);