// Class:56 Factory functions

function criaPessoa(nome, sobrenome, a, p) {
    return { 
        nome,
        sobrenome,

        // Getter
        get nomeCompleto() {
            return `{this.nome} ${this.sobrenome}`;

        },

        //Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ')
            this.nome = valor.shift();
            this.sobrenome= valor.join(' ');
        },

        fala: function(assunto) {
            return `${this.nome} está ${assunto}.`;
        },
        altura: a,
        peso: p,

        // Getter
        get imc(){
            const indice= this.peso / (this.altura ** 2);
            return indice.toFixed(2);

        }
    };
    
}

/*
const p1 = criaPessoa('Luiz', 'Otávio', 1.8, 80);
console.log(p1.imc());
const p2 = criaPessoa('Maria', 'Joaquina', 1.6, 55);
console.log(p2.fala('falando sobre JS'));
console.log(p2.imc());
*/

const p1 = criaPessoa('Luiz', 'Otávio', 1.8, 80);
p1.nomeCompleto = 'Luiz Otávio Miranda'; 
console.log (p1.nomeCompleto);