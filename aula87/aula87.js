function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        if(typeof msg !== 'string') {
            reject (false);
            return;
        }

        
            resolve(msg);
            return;
        }, tempo);   
    });
}


// Promise.all Promise.race Promise.resolve Promise.reject

const promises = [
    esperaAi('Promise 1', rand(1, 5)),
    esperaAi('Promise 2', rand(1, 5)),
    esperaAi('Promise 3', rand(1, 5)),
];

function baixaPagina() {
    const emCache = true;

    if(emCache) {
        return Promise.resolve('Pagina em cache');
    } else {
        return esperaAi('Baixei a pagina', 3000);
    }
}

baixaPagina()
  .then(dadosPagina => {
    console.log(dadosPagina)
  })
  .catch(e => console.log('Erro', e));