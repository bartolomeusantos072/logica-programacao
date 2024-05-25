/*
Ler tres valores e apresenta los dispostos em ordem crescente. 
Utilizar os conceitos de propriedade distributiva (exercício "g" do capítulo 3)
e troca de valores entre variáveis (exercício "f" do capítulo 3).
*/
let maior = parseInt(prompt("informe o valor 1")),
    meio = parseInt(prompt("informe um valor 2")),
    menor= parseInt(prompt("informe o valor 3"));
let troca;

if(meio > maior){
  troca = maior;
  maior = meio;
  meio = menor;   
}
if(meio < menor){
    troca = menor;
    menor = meio;
    meio =troca;
}
if(meio>=menor && meio<=maior){
    alert(`resultado: ${menor} ${meio} ${maior}`);
 }