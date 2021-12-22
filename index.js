const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Home pge')
})

app.get('/api/', (req, res) => {
  res.send('Tu api')
})

app.get('*', (req, res) => {
  res.send('Page not found')
})

app.listen(8080)