/*
Apresentar os resultados das potências de base 3, 
variando do expoente 0 até o expoente 15.
Deve ser considerado que :
    qualquer número elevado a zero é 1,
    qualquer número elevado a 1 é ele próprio. 
Deverá ser apresentado, observando a seguinte definição:
*/
alert("Bem-vindo!"); 
const base=3;
let resultado="";

for(let i=0;i<16;i++){
    resultado+=`3^${i} = ${(base**i)}\n`;
}
alert(resultado);