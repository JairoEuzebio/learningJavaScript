// Aula 81 - Symble

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nomeCompleto(){
        return this.nome + ' ' + this.sobrenome;
    }

    set nomeCompleto(valor) {
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
    }
}

const p1 = new Pessoa ('Luiz', 'Miranda');
p1.nomeCompleto = 'Luiz Miranda';
console.log(p1.nomeCompleto);



/*
const _velocidade = Symbol('velocidade');
class Carro {
    constructor(nome){
        this.nome = nome;
        this[_velocidade] = 0;
    }


    set velocidade(valor){
        console.log('SETTER')
        if(typeof valor !== 'number') return;
        if(valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
        
    }

    get velocidade(){
        console.log('GETTER')
        return this[_velocidade];
    }
    acelerar(){
        if(this.velocidade >= 100) return;
        this[_velocidade] ++;
    }

    freiar(){
        if(this.velocidade <= 0) return;
        this[_velocidade] --;
    }
}

const c1 = new Carro('Fusca');
c1.velocidade = 99;
console.log(c1.velocidade);
*/