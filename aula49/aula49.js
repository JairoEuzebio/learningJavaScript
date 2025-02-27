// 27.02.25

// Function Declaration

function falaOi() {
    console.log('Oi');
};
falaOi();

// Function Expression
const souUmDado = function () {
    console.log('Sou um dado.');
};
souUmDado();

// Arrow function
const funcaoArrow = () => {
    console.log('Sou uma função arrow');
};
funcaoArrow();

// Dentro de um objeto
const obj = {
    falar: function() {
        console.log('Estou falando...');
    }
};
obj.falar();
