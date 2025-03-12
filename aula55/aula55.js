// IIFE -> Immediately Invoked Function Expression

/*
(function() {
    const nome = 'Luiz';

})();

const nome = 'Qualquer coisa'; // Não gera conflito com a variavel nome da função IIFE
*/

(function(idade, peso, altura) {

    const sobrenome = 'Miranda';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome(){
        console.log(criaNome('Luiz'));
    }

    falaNome();
    console.log(idade, peso, altura);

})(39, 80, 1.80);

