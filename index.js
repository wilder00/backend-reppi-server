const http = require('http')

const server = http.createServer((req, res)=>{
  res.setHeader('Content-Disposition', 'attachment; filename=list.csv')
  res.writeHead(200,{'content-type':'application/csv'})
  
  res.write('id,nombre\n')
  res.write('1,Maria\n')
  res.write('2,Renata\n')
  res.write('3,Fernanda\n')
  res.end()
})

server.listen(8080)

console.log('Escuchando en el puerto 8080');

