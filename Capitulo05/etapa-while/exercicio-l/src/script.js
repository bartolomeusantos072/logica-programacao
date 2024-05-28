/*
Elaborar um programa que efetue a leitura de 15 valores numéricos inteiros
e no final apresente o total do somatório da fatorial de cada valor lido. 
*/
alert("Bem-vindo!"); 
let num,soma=0;
let fatorial =1;
let i=0;
while(i<15){
    num = parseInt(prompt("Informe um valor"));
    if(num){
        let j=num;
        while(j>-1){
            j==0? fatorial*=1: fatorial*=j;
            j--;
        }
        alert(`${num} fatorial é ${fatorial}`)
        soma+=fatorial
        fatorial=1;

    }
    i++;
}
alert(soma);