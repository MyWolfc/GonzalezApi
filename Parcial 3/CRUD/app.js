
const express = require('express');
const path = require('path');
const app = express();
const ruta = require('./router/router');

const { Console } = require('console');
//const { Router } = require('express');


app.use("/Jugadores",ruta.router)




app.listen(8081,() => {
  console.log('Servidor express escuchando en proceso ')
  console.log(__dirname)
  console.log(__filename)
})