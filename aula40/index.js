const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i in numeros) {

    let numero = numeros[i];

    if (numero === 2 ) {
        console.log('Pulei o numero 2');
        continue;
    }

    console.log(numero);

    if (numero ===7){
        console.log('7 Encontrado! Saindo.')
        break;
    }
}    