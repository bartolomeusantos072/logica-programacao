//ler um valor qualquer e verificar se .nao.(valor > 3)

let valor=parseInt(prompt("informe um valor"));
if(!(valor>3) ) {
    alert(`${valor} não é maior que 3`);
}else{
    alert(`${valor} é maior que 3`);
}
