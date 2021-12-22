const express = require('express');
const cors = require('cors');

class Server{

  constructor(){
    this.port = process.env.PORT || 3000
    this.app = express();
    this.usuariosPath = '/api/users';

    //middlewares aquí
    this.middlewares();

    //rutas de la aplicación
    this.routes();
  }

  middlewares(){
    this.app.use(cors());

    //use es la palabra clave para decir que es un middleware
    this.app.use(express.static('public'));
  }

  routes(){
    //cargando por middleware una ruta
    this.app.use(this.usuariosPath, require('../routes/users.route'))
  }

  listen(){
    this.app.listen(this.port, ()=> {
      console.log(`listening on http://localhost:${this.port}`);
    })
  }

}

module.exports = Server