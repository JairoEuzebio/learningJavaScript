const alunos= ['Luiz', 'Maria', 'João'];

console.log(alunos[0]); // Luiz
console.log(alunos[1]); // Maria
console.log(alunos[2]); // João

alunos[0] = 'Eduardo'; // Altera o valor do índice 0
console.log(alunos[0]); // Eduardo 

alunos[3] = 'Luiza'; // Adiciona um novo valor ao índice 3

console.log(alunos.length);

alunos.push('Otávio'); // Adiciona um novo valor ao final do array
alunos.push('Fábio'); // Adiciona um novo valor ao final do array

console.log(alunos.length);

alunos.unshift('Luiza'); // Adiciona um novo valor ao início do array

const removido = alunos.pop(); // Remove o último valor do array e retorna o valor removido

console.log(removido);

const removido2 = alunos.shift(); // Remove o primeiro valor do array e retorna o valor removido

console.log(removido2);

delete alunos[1]; // Deleta o valor do índice 1, mas mantém o índice

console.log(alunos);
console.log(alunos.slice(0, 3)); // Retorna os valores do índice 0 ao 3