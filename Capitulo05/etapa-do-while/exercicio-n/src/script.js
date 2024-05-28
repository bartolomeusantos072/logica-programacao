/*
Elaborar um programa que efetue a leitura sucessiva de valores numéricos
e apresente no final o total do somatório, a média e o total de valores lidos.
O programa deve fazer as leituras dos valores enquanto o usuário estiver 
fornecendo valores positivos. Ou seja, o programa deve parar quando o usuário
fornecer um valor negativo (menor que zero). 

*/
alert("Bem-vindo!"); 
let num=Number(prompt("Informe um valor"));
let valores=0, soma=0, media=0;
if(num<0){
    alert("finalizar");
}else{
    valores=1;
    let i=0;
    while(i<=num){
        num=Number(prompt("Informe um valor"));
        if(num>=0){

            soma+=num;
            media=soma/(i+1);
            valores++;
        }else{
            break;
        }
        i++;
    }
}
alert(`somatorio:${soma} média:${media} qtde valores:${valores}`)
