const express = require('express');
const app = express();

const fakerResponse = require('./faker')

app.get('/', function(req, res) {
  res.status(200).json(fakerResponse);
});

app.listen(3000, function() {
  console.log('App de Exemplo escutando na porta 3000!');
});