const express = require('express');
const cors = require('cors');

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
    this.app.use(cors());

    //use es la palabra clave para decir que es un middleware
    this.app.use(express.static('public'));
  }

  routes(){
    this.app.get('/api', (req, res)=>{
      res.json(
        {
          ok:true,
          message: 'Get api'
        }
      );
    })
    this.app.post('/api', (req, res)=>{
      res.json(
        {
          ok:true,
          message: 'Post api'
        }
      );
    })
    this.app.put('/api', (req, res)=>{
      res.json(
        {
          ok:true,
          message: 'Put api'
        }
      );
    })
    this.app.patch('/api', (req, res)=>{
      res.json(
        {
          ok:true,
          message: 'Patch api'
        }
      );
    })
    this.app.delete('/api', (req, res)=>{
      res.json(
        {
          ok:true,
          message: 'Delete api'
        }
      );
    })
  }

  listen(){
    this.app.listen(this.port, ()=> {
      console.log(`listening on http://localhost:${this.port}`);
    })
  }

}

module.exports = Server