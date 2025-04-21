const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`
    <form action="/" method="POST">
    Nome do cliente: <input type= "text" name= "nome">
    <button>Enviar</button>
    `);
});

app.get('/testes/:idUsuarios?', (req, res) => {
  console.log(req.params);
  res.send('Oi');
});

app.post('/', (req, res) => {
  console.log(req.body)
  res.send('Recebi o form');

});

app.listen(3000, () => {
  console.log('Acessar http://localhost:3000');
  console.log('Servidor executando na porta 3000');

});