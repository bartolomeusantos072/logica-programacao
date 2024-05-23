//ler um valor númerico inteiro negativo ou positivo
//apresentar a valor sempre positivo

let valor=parseInt(prompt("Informe o 1° valor:"));

if(valor < 0){
    valor*=-1;
}

alert(`O resultado é ${valor}`);
