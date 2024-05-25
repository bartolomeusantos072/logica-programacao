//verificar se um valor esta no intervalo entre 0 e 9;

let valor=parseInt(prompt("informe um valor"));
if( valor < 9 && valor >= 0 ) {
    alert(`${valor} esta no entre 0 e 9`);
}else{
    alert(`${valor} é um valor fora do intervalo`);
}
