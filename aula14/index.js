// IEEE 754-2008
let num1 = 0.7;
let num2 = 0.1;

num1 = ((num1 * 100) + (num2 * 100)) / 100;  // 0.8
num1 = (num1 + num2).toFixed(2);  // 0.9
num1 = parseFloat(num1);  // 0.9



//num1 = parseFloat(num1.toFixed(2));  // 1.0

console.log(num1);
console.log(Number.isInteger(num1));

// console.log(num1.toString() + num2);
// num1 = num1.toString();
// console.log(num1.toString(2));  // binário
// console.log(num1.toFixed(2));  // 1.00
// console.log(Number.isInteger(num1));  // true
// let temp = num1 * 'Olá';
// console.log(Number.isNaN(temp));  // true



