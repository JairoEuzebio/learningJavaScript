// Class 75 - Manipuling Prototypes - Rever depois

function Produto(nome, preço) {
    this.nome = nome;
    this.preço = preço;
}

Produto.prototype.desconto = function(percentual) {
    this.preço = this.preço - (this.preço * (percentual / 100));
};

Produto.prototype.aumento = function(percentual) {
    this.preço = this.preço + (this.preço * (percentual / 100));
};

const p1 = new Produto('Camiseta', 50);

//literal object
const p2 = {
    nome: 'Caneca',
    preço: 15
};
Object.setPrototypeOf(p2, Produto.prototype);

p2.aumento(10);
console.log(p1);
console.log(p2);

const p3 = Object.create(Produto.prototype, {
    nome: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 'Boné' 
    },
    preço: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 15
    }
    

});
