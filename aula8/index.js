const nome = 'Jairo';
const sobrenome = 'Euzebio';
const idade = 28;
const peso = 57;
const alturaEmM = 1.73;

let indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
let anoNascimento = 2025 - idade;



console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg');
console.log('tem', alturaEmM, 'de altura e seu IMC é de', indiceMassaCorporal);
console.log(nome, 'nasceu em', anoNascimento);

// template strings
console.log(`${nome} nasceu em ${anoNascimento}.`);

