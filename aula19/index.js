/* 
Primitivos - string, number, boolean, undefined, null (bigint, symbol)


*/

/* let a = 'A'; // string
let b = a; // cópia
console.log(a, b);

a = 'Outra coisa';
console.log(a, b);
*/

// Referência - array, object, function

let a= [1, 2, 3];
let b = a; // cópia 
console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);

