const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <form action="/" method="POST">
    Nome do cliente: <input type= "text" name= "nome">
    <button>Enviar</button>
    `);
});

app.post('/', (req, res) => {
  res.send('Recebi o form');

});

app.get('/contato', (req, res) => {
  res.send('Obrigado por entrar em contato com a gente.');

});

app.listen(3000, () => {
  console.log('Acessar http://localhost:3000');
  console.log('Servidor executando na porta 3000');

});