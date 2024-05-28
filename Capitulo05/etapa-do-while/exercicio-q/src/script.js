/*
Elaborar um programa que possibilite calcular a área total de uma residência
(sala, cozinha, banheiro, quartos, área de serviço, quintal, garagem, etc.). 
O programa deve solicitar a entrada do nome, a largura e o comprimento
de um determinado cômodo. Em seguida, deve apresentar a área do cômodo lido
e também uma mensagem solicitando ao usuário a confirmação de continuar
calculando novos cômodos. Caso o usuário responda "Cancelar", 
o programa deve apresentar o valor total acumulado da área residencial. 

*/
alert("Bem-vindo!"); 
let residencia= 1;
let comodo="",largura=0, comprimento=0, area=0;

let i=0;
do{
    comodo+=prompt(`Qual o nome do ${i+1}º comodo?`);
    largura=Number(prompt(`Qual a largura do(a) ${comodo}?`));
    comprimento=Number(prompt(`Qual a comprimento do(a) ${comodo}?`));
    area=largura*comprimento;
    alert(`${comodo} possui ${area.toFixed(2)}m².`);
    comodo+=` ${area}m²`;
    if(confirm("Deseja calcular novos comodos?")==true){
        residencia++;
        comodo+=", ";
        total+=area;
    }else{
        break;
    }
    i++;
}while(i<residencia);
alert(comodo,`total ${area}m²`);
