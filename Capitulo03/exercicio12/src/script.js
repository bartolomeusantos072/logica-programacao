alert("Bem-vindo!"); 
let reais =Number(prompt("Quantos reais você deseja converter?"));
let cotacao = Number(prompt("Qual a cotação atual do dollar?"));
let dollar=reais/cotacao;
alert(`R$ ${reais} equivale a $ ${dollar}`);