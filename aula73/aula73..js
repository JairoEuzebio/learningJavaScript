// Class 73 - Methods

/*
const produto = { nome: 'Produto', preço: 1.8};
Object.defineProperty(produto, 'nome', {
    writable: false,
    congigurable: false,
    value: 'Produto'
})
*/

console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));

for(let entry of Object.entries(produto)){
    console.log(entry);
}