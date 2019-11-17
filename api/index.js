const express = require('express');
const app = express();

const fakerResponse = require('./faker')

const monitor = require('express-status-monitor')

app.use(monitor())

app.get('/healthcheck', function(_, res) {
	try {
    const healthcheck = {
      uptime: process.uptime(),
      message: 'OK'
    }

		res.json(healthcheck)
	} catch (e) {
		healthcheck.message = e
		res.status(503).json(healthcheck)
	}
})

app.get('/', function(_, res) {
  const element = []
  for (let index = 0; index < 10000000; index++) {
    element.push(Math.random())
  }
  res.status(200).json({ element })
})

app.listen(3000, function() {
  console.log('App de Exemplo escutando na porta 3000!')
})