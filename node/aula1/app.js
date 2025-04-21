const path = require('path');
const { Pessoa } = require('./mod1');
const axios = require('axios');
const mod1 = require('./mod1');

const p1 = new Pessoa('Luiz');
console.log(p1);

console.log(mod1);
console.log(Pessoa);