/*
Elaborar um programa que efetue o cálculo e no final 
apresente o somatório do número de grãos de trigo 
que se pode obter num tabuleiro de xadrez, 
obedecendo à seguinte regra: 
    colocar um grão de trigo no primeiro quadro 
    e nos quadros seguintes o dobro do quadro anterior.
    Ou seja, no primeiro quadro coloca-se 1 grão, 
    no segundo quadro colocam- -se 2 grãos (neste momento têm-se 3 grãos),
    no terceiro quadro colocam- -se 4 grãos (tendo neste momento 7 grãos),
    no quarto quadro colocam- -se 8 grãos (tendo-se então 15 grãos)
    até atingir o sexagésimo quarto quadro 
    (Este exercício foi baseado numa situação exposta no capítulo 16 do livro 
        "O Homem que Calculava" de Malba Tahan, da Editora Record).

*/
alert("Bem-vindo!"); 
let resultado="";
let posterior=0,total=0;anterior=0;
let i=0;
do{
    if(i==0){
        anterior=1;
        posterior=anterior;
    }
    total+=anterior;
    console.log(anterior," ",total);
    posterior= anterior*2;
    anterior=posterior;
   i++;
}while(i<64);