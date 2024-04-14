alert("Bem-vindo!"); 
let salario =Number( prompt("informe o valor do salário?"));
let reajuste =Number( prompt("informe a porcentagem de reajuste"));
let novoSalario = salario +(reajuste/100*salario);
alert(`O novo sálario é ${novoSalario}`);