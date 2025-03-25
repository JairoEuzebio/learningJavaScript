// Class 72 - defineProperty - Getter and Setters

function Produto(nome, preço, estoque){
    this.nome = nome;
    this.preço = preço;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // show the key
        configurable: true, // if can reconfigure the key
        get: function(){
            return estoque;
        },
        set: function(valor){
            if(typeof valor !== 'number'){
                throw new TypeError('Invalid value');
            }
        }
    });
}

function criaProduto(nome){
    return{
        get nome(){
            return nome;
        },
        set nome(valor){
            valor = valor.replace('coisa', '');
            nome = valor;
        }
    };

}

//const p1 = new Produto('Camiseta', 20, 3);
//console.log(p1.estoque);
//console.log(p1);

const p2 = criaProduto('Camiseta');
p2.nome = 'Qualquer coisa';
console.log(p2.nome);