/*
Elaborar um programa que efetue a leitura de valores positivos inteiros, 
até que um valor negativo seja informado. Ao final devem ser apresentados
o maior e o menor valores informados pelo usuário. 

*/
alert("Bem-vindo!"); 
let tamanho=1,min,max;
let i=0;
do{ 
    
    maior= parseInt(prompt("Informe o Maior valor positivo para comparar\n ou digite um valor negativo para sair"));
    if(maior<0){
        alert("fim da leitura de valores");
        break;
    }else{
        menor= parseInt(prompt("Informe o Menor valor positivo para comparar\n ou digite um valor negativo para sair"));
        if(menor<0){
            alert("fim da leitura de valores");
            break;
        }else{
            tamanho++;
        }

    }
    if(i==0){
        min=menor;
        max=maior;
    }
    if(menor > maior){
        let troca=menor;
        menor=maior;
        maior=troca;
    }
    if(min > menor && menor >=0){
        min=menor;
    }
    if(max < maior && maior >=0){
        max=maior;
    }
    i++;
}while(i<tamanho);
alert(`menor valor é:${min} e o maior é ${max}`);
