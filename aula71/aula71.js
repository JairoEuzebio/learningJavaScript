// Class 71 - defineProperty - defineProperties

function Produto(nome, preço, estoque){
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // show the key
        value: estoque, // value
        writable: false, // if can change the value
        configurable: true // if can reconfigure the key
    });

    Object.defineProperties(this, {
        nome: {
        enumerable: true, // show the key
        value: nome, // value
        writable: false, // if can change the value
        configurable: true // if can reconfigure the key
            
        },
        preço: {
            enumerable: true, // show the key
            value: preço, // value
            writable: false, // if can change the value
            configurable: true // if can reconfigure the key    
        },
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);