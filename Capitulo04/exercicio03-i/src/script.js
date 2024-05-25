//ler cinco valores numericos
alert("Bem-vindo!"); 
let valor1=parseInt( prompt("informe o 1° valor"));
let valor2= parseInt(prompt("informe o 2° valor"));
let valor3= parseInt(prompt("informe o 3° valor"));
let valor4= parseInt(prompt("informe o 4° valor"));
let valor5= parseInt(prompt("informe o 5° valor"));
let maior = Math.max(valor1,valor2,valor3,valor4,valor5);
let menor = Math.min(valor1,valor2,valor3,valor4,valor5);

alert(`O maior valor é: ${maior} e o menor é: ${menor}`);
