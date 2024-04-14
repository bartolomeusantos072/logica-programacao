alert("Bem-vindo!");
const kmlitro=12;
let tempo = prompt("informe o tempo de viagem");
let velocidade = prompt("informe a velocidade media");
let distancia = tempo * velocidade;
let litrosUsado = distancia/kmlitro;
alert(`Para os automoveis que fazem ${kmlitro}km/l o valor da velocidade média é:${velocidade}, o tempo gasto na viagem ${tempo}, a distancia percorrida:${distancia} e a quantidade de litros utilizada na viagem:${litrosUsado.toFixed(2)}litros.`); 
