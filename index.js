'use strict'
const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config');
//Conecion a mongodb
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect(config.db,options,(err,res)=>{
  if(err){
      return console.log(`error al conectar la base de datos: ${err}`);
  }
  console.log('conexión a la base de datos establecida');

  app.listen(config.port,() =>{
    console.log(`API REST corriendo en http://localhost:${config.port}`)
  })
})

