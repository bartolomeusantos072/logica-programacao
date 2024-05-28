/*
Apresentar o total da soma obtida dos 100 primeiros 
números inteiros (1+2+3+4+5+6+7+...97+98+99+100).
*/
alert("Bem-vindo!"); 
let soma=0;
for(let i=0;i<100;i++){
    soma+=(i+1);
}
alert(`resultado: ${soma}`);
