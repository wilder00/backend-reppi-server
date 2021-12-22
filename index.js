const http = require('http')

const server = http.createServer((req, res)=>{
  res.writeHead(200,{'content-type':'text/plain'})
  const persona = {
    id: 1,
    nombre: 'Fernando '
  }
  res.write(JSON.stringify(persona))
  res.end()
})

server.listen(8080)

console.log('Escuchando en el puerto 8080');

