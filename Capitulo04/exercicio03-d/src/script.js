let bim1=Number(prompt("Qual a nota do 1°Bim")),
bim2=Number(prompt("Qual a nota do 2°Bim")),
bim3=Number(prompt("Qual a nota do 3°Bim")),
bim4=Number(prompt("Qual a nota do 4°Bim")),
exame=undefined;

let media = (bim1+bim2+bim3+bim4)/4;

if(media>=7){
    alert("aluno aprovado");
}else{
    exame=Number(prompt("Qual o valor do exame?"));
    let novaMedia= (media+exame)/2;
    if(novaMedia>=5){
        alert("aluno aprovado");
    }else{
        alert("aluno reprovado");
    }
}