// Class 58

// Constructor Function
// Factory Function

function Pessoa(nome, sobrenome) {
    const ID = 123456;

    const metodoInterno = function(){
        
    };

    // Methods 
    this.nome = nome;
    this.sobrenome = sobrenome;


    this.metodo = function() {
    console.log(this.nome + ': sou um método');
    };
}

const p1 = new Pessoa('Luiz', 'Otávio');
const p2 = new Pessoa('Maria', 'Oliveira');
p1.metodo();

