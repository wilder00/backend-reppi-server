require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Home pge')
})

app.get('/api/', (req, res) => {
  res.send('Tu api')
})

app.get('*', (req, res) => {
  res.send('Page not found')
})

app.listen(port, ()=> {
  console.log(`listening on http://localhost:${port}`);
})