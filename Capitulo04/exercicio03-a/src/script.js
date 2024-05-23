//ler dois valores númericos inteiros
//apresentar a diferença do maior valor pelo menor valor;

let maior=parseInt(prompt("Informe o 1° valor:"));
let menor=parseInt(prompt("Informe o 2° valor:"));
let troca;
if(maior < menor){
    troca=maior;
    maior=menor;
    menor=troca;
}

alert(`A diferença entre ${maior} e ${menor} é ${maior-menor}`);
