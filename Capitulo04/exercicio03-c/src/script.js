let bim1=Number(prompt("Qual a nota do 1°Bim")),
bim2=Number(prompt("Qual a nota do 2°Bim")),
bim3=Number(prompt("Qual a nota do 3°Bim")),
bim4=Number(prompt("Qual a nota do 4°Bim"));

let media = (bim1+bim2+bim3+bim4)/4;

if(media>=5){
    alert("aluno aprovado");
}else{
    alert("aluno reprovado")
}