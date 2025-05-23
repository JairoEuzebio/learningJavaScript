// Class 68- How to join them together.
// Filter pair numbers.
// Map double the values.
// Reduce (Add all).

/*
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosPares = numeros.filter(function(valor){ 
   return valor % 2 === 0;
}).map(function(valor){
    return valor * 2;

}).reduce(function(acumulador, valor){
    return acumulador + valor;
});
console.log(numerosPares);
*/

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosPares = numeros
.filter(valor => valor % 2 === 0)
.map(valor => valor * 2)
.reduce((acumulador, valor) => acumulador + valor);

console.log(numerosPares);