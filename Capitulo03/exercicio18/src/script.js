alert("Bem-vindo!"); 
let qtdeVotosCandidatoA = Number(prompt("informe a quantidade de votos do candidato A?"));
let qtdeVotosCandidatoB = Number(prompt("informe a quantidade de votos do candidato B?"));
let qtdeVotosCandidatoC = Number(prompt("informe a quantidade de votos do candidato C?"));

let qtdeVotosNulo= Number(prompt("informe a quantidade de votos Nulos?"));

let qtdeVotosBranco=Number(prompt("informe a quantidade de votos em Branco?"));

let votosValidos=(qtdeVotosCandidatoA+qtdeVotosCandidatoB+qtdeVotosCandidatoC);
let totalEleitores= votosValidos+qtdeVotosNulo+qtdeVotosBranco;
let percentualVotosValidos=(votosValidos/totalEleitores)*100;
let percentualVotosCandidatoA=(qtdeVotosCandidatoA/totalEleitores)*100;
let percentualVotosCandidatoB=(qtdeVotosCandidatoB/totalEleitores)*100;
let percentualVotosCandidatoC=(qtdeVotosCandidatoC/totalEleitores)*100;
let percentualVotosBranco=(qtdeVotosBranco/totalEleitores)*100;
let percentualVotosNulo=(qtdeVotosNulo/totalEleitores)*100

alert(`total de eleitores ${totalEleitores} \n
       votos validos: ${percentualVotosValidos}% \n
       candidato A ${percentualVotosCandidatoA}% dos votos \n
       candidato B ${percentualVotosCandidatoB}% dos votos \n
       candidato C ${percentualVotosCandidatoC}% dos votos \n
       votos em branco: ${percentualVotosBranco} % dos votos\n
       votos nulos : ${percentualVotosNulo} % dos votos 
       \n`);
