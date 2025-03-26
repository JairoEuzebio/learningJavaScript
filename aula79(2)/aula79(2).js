// Class 80 - Object map()

const pessoas = [
    { id: 3, nome: 'Luiz'},
    { id: 2, nome: 'Maria'},
    { id: 1, nome: 'Helena'},
];

const novasPessoas = new Map();
for(const {id, nome} of pessoas){
    const { id } = pessoas;
    novasPessoas.set(id, { ...pessoas});
}

console.log(novasPessoas.get(2));

for(const pessoas of novasPessoas.values()){
    console.log(pessoas);
}