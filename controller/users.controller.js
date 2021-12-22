const {request, response } = require('express');
const { put } = require('../routes/users.route');

//para que el editor reconozca el tipo de dato se redunda en req y res
const getUsers = (req =request, res=response)=>{
  res.json(
    {
      ok:true,
      message: 'Get api - Controller'
    }
  );
}

const postUsers = (req =request, res=response)=>{
  res.json({
    message: 'PostUsers - Controller'
  })
}
const putUsers = (req =request, res=response)=>{
  res.json({
    message: 'putUsers - Controller'
  })
}
const patchUsers = (req =request, res=response)=>{
  res.json({
    message: 'PatchUsers - Controller'
  })
}
const deleteUsers = (req =request, res=response)=>{
  res.json({
    message: 'DeleteUsers - Controller'
  })
}

module.exports = {
  getUsers,
  putUsers,
  postUsers,
  patchUsers,
  deleteUsers,
}