const express = require('express');
const cors = require('cors');
const { environment } = require('../config/config')

class Server{

  constructor(){
    this.port = environment.port
    this.app = express();
    this.usersApiPath = '/api/users';
    this.servicesApiPath = '/api/services';

    //middlewares aquí
    this.middlewares();

    //rutas de la aplicación
    this.routes();
  }

  middlewares(){
    
    this.app.use(cors());
    this.app.use(express.json());
    //use es la palabra clave para decir que es un middleware
    this.app.use(express.static('public'));
  }

  routes(){
    //cargando por middleware una ruta
    this.app.use(this.usersApiPath, require('../routes/users.route'))
    this.app.use(this.servicesApiPath, require('../routes/services.route'))
  }

  listen(){
    this.app.listen(this.port, ()=> {
      console.log(`listening on http://localhost:${this.port}`);
    })
  }

}

module.exports = Server