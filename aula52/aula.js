// Class 52 lexical scope

const nome = 'Luiz';

function falaNome() {
    const nome = 'Otávio';
    console.log(nome);
}

falaNome();

function usaFalaNome() {
    const nome = 'Luiz';
    falaNome();
}

usaFalaNome();