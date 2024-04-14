alert("Bem-vindo!"); 
let valor =Number( prompt("informe o valor da prestação"));
let taxa = Number( prompt("informe o valor da taxa"));
let tempo= Number(prompt("qual o tempo de atraso?"));
let prestacao = valor+(valor*(taxa/100)*tempo);
alert(`O valor de uma prestação em atraso é: ${prestacao}`);