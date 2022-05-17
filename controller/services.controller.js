const {request, response } = require('express');
const pool = require('../libs/postgres')

pool.on('error', (err) => {console.log(err);})  
//para que el editor reconozca el tipo de dato se redunda en req y res
const getServices = async (req =request, res=response)=>{
  try {
    //const client = await pool.connect();
    const query = "SELECT * FROM services"
    //await pool.connect();
    //const users = await client.query(query);
    //client.release();
    const services = await pool.query(query)
    res.json(
      services.rows
    );
    
  } catch (error) {
    res.status(500).json({message: error.message, error});
  }
}

     

const postServices = (req =request, res=response)=>{
  res.json({
    message: 'PostServices - Controller'
  })
}
const putServices = (req = request, res = response)=>{
  res.json({
    message: 'putServices - Controller'
  })
}
const patchServices = (req =request, res=response)=>{
  res.json({
    message: 'PatchServices - Controller'
  })
}
const deleteServices = (req =request, res=response)=>{
  res.json({
    message: 'DeleteServices - Controller'
  })
}

module.exports = {
  getServices,
  putServices,
  postServices,
  patchServices,
  deleteServices,
}