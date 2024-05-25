alert("Bem-vindo!"); 
let dollar = Number(prompt("Quantos dollares?"));
let cotacao = Number(prompt("Qual a cotação atual do dollar?"));
let real=dollar*cotacao;
alert(`$ ${dollar} equivale a R$ ${real}`);