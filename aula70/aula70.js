// Class 70 - Objects Revision.

/*
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30

};

const chave = 'nome';

console.log(pessoa['nome']);
console.log(pessoa[chave]);
console.log(pessoa.sobrenome);
*/

/*

const pessoa1 = new Object();
pessoa1.nome = 'Luiz';
pessoa1.sobrenome = 'Miranda';
pessoa1.idade = 30;
pessoa1.falarNome = function(){
    return(`${this.nome} está falando seu nome.`);
};
pessoa1.getDataNascimento = function(){
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};


for (let chave in pessoa1){
    console.log(chave, pessoa1[chave]);
}

*/

// Factory Functions / Construtor Functions / Classes 

// Factory Function

/*
function criaPessoa(nome, sobrenome, idade) {
   return{
    nome,
    sobrenome,
    nomeCompleto(){

        return `${this.nome} ${this.sobrenome}`;
    }
  };
}

const p1 = criaPessoa('Luiz', 'Otávio', 25);
console.log(p1.nomeCompleto());
*/


// Construtor function 

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    Object.freeze(this); // Freeze the object, it can't be changed anymore.
}

// {} <- this 
const p1 = new Pessoa ('Luiz', 'Otavio');
p1.nome = 'Outra coisa';
console.log(p1);
