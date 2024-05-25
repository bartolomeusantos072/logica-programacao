alert("Bem-vindo!"); 

let pessoa={ 
    nome: prompt("Qual o seu nome?"),
    sexo: prompt('informe o sexo?')[0].toLowerCase()
}

if(pessoa.sexo=='f'){
    alert(`Ilma. Sra. ${ pessoa.nome}`);
}else{
    alert(`I