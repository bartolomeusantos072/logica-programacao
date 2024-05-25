//ler quatro valores numericos
alert("Bem-vindo!"); 
let valor1= parseInt(prompt("informe o 1° valor"));
let valor2= parseInt(prompt("informe o 2° valor"));
let valor3= parseInt(prompt("informe o 3° valor"));
let valor4= parseInt(prompt("informe o 4° valor"));

//apresentar valores que são divisiveis por 2 ou 3;
let resultado = [];
if(valor1 % 2 == 0 || valor1 % 3 == 0) {
    resultado.push(valor1);
}
if(valor2 % 2 == 0 || valor2 % 3 == 0) {
    resultado.push(valor2);
}
if(valor3 % 2 == 0 || valor3 % 3 == 0) {
    resultado.push(valor3);
}
if(valor4 % 2 == 0 || valor4 % 3 == 0) {
    resultado.push(valor4);
}
alert(`valores divisiveis por 2 e 3\n ${resultado}`);
