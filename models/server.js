const express = require('express');
class Server{

  constructor(){
    this.port = process.env.PORT || 3000
    this.app = express();

    //middlewares aquí
    this.middlewares();

    //rutas de la aplicación
    this.routes();
  }

  middlewares(){
    //use es la palabra clave para decir que es un middleware
    this.app.use(express.static('public'));
  }

  routes(){
    this.app.get('/', (req, res)=>{
      res.send("Hello World")
    })
  }

  listen(){
    this.app.listen(this.port, ()=> {
      console.log(`listening on http://localhost:${this.port}`);
    })
  }

}

module.exports = Server