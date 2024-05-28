/*
Elaborar um programa que efetue a leitura de 15 valores numéricos inteiros
e no final apresente o total do somatório da fatorial de cada valor lido. 
*/
alert("Bem-vindo!"); 
let num,soma=0;
let fatorial =1;
for(let i=0;i<15;i++){
    num = parseInt(prompt("Informe um valor"));
    if(num){
        for(let j=num;j>-1;j--){
            j==0? fatorial*=1: fatorial*=j;
        }
        alert(`${num} fatorial é ${fatorial}`)
        soma+=fatorial
        fatorial=1;

    }
}
alert(soma);