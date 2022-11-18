var mysql = require('mysql');
const express = require('express');
//var Router = express.Router();
var router = express.Router();
//const Router = require('router');



//const { Router } = require('express');


var connection = mysql.createConnection({

  host : 'localhost',
  user : 'root',
  password : 'Juan@20',
  database : 'n19100190'

});


/**
 * @swagger
 * /Jugadores:
 *  delete:
 *   description: Elimina la informacion sobre un jugador en especifico
 *   responses:
 *    200:
 *     description: Esto permite eliminar permanentemente la informacion todos los jugadores.
*/
router.delete('/:id', async (req, res) =>{
  console.log(req.params)
      connection.query(`delete from jugadores where idID = ${req.params.id}`, function (error, results, fields) {
      if (error) throw error;
      const respuesta = results;
      console.log(results);
      res.send(results);  
  });
})

/**
 * @swagger
 * /Jugadores:
 *  put:
 *   description: Modifica la informacion sobre un jugador en especifico
 *   responses:
 *    200:
 *     description: Esto permite modificar la informacion todos los jugadores.
*/
router.put('/:ID', async (req,res)=>{
  console.log(req.body)
  connection.query(`update jugadores set NombreCom = '${req.body.NombreCom}',NombreDelJuego = '${req.body.NombreDelJuego}',Rango = '${req.body.Rango}',Edad = ${req.body.Edad},Pais = '${req.body.Pais}' where idID =${req.params.ID}`, function (error, results, fields) {
    if (error) throw error;
    console.log(results);
    res.send(results);  



  });
})

/**
 * @swagger
 * /Jugadores:
 *  post:
 *   description: Ingresa nueva informcion sobre un jugador
 *   responses:
 *    200:
 *     description: Esta permite dar de alta a jugador nombre completo, nombre del juego, rango, edad y pais.
*/
router.post('/', async (req,res)=>{
  console.log(req.body)
  connection.query(`insert into jugadores(NombreCom,NombreDelJuego,Rango,Edad,Pais) values('${req.body.NombreCom}','${req.body.NombreDelJuego}','${req.body.Rango}',${req.body.Edad},'${req.body.Pais}')`, function (error, results, fields) {
    if (error) throw error;
    console.log(results);
    res.send(results);  



  });
})


/**
 * @swagger
 * /Jugadores/ID:
 *  get:
 *   description: Informacion sobre un jugador en especifico
 *   responses:
 *    200:
 *     description: Esta delvuelve todos los jugadores de un jugador consultado por numero de ID.
*/
router.get('/:ID', async (req, res) =>{
  console.log(req.params)

    connection.query(`SELECT * FROM jugadores where idID = ${req.params.ID}`, function (error, results, fields) {
      if (error) throw error;
      console.log(results);
      res.send(results);  
  });
})

/**
 * @swagger
 * /Jugadores:
 *  get:
 *   description: Informacion sobre un jugador
 *   responses:
 *    200:
 *     description: Esta delvuelve todos los jugadores.
*/
router.get('/', async (req, res) =>{
  console.log(req.params)
   connection.query(`SELECT * FROM jugadores`, function (error, results, fields) {
      if (error) throw error;
      console.log(results);
      res.send(results);  
  });
})

module.exports.router = router;