var mysql = require('mysql');
const express = require('express');
//var Router = express.Router();
var router = express.Router();
//const Router = require('router');



//const { Router } = require('express');
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


var connection = mysql.createConnection({

  host : 'localhost',
  user : 'root',
  password : 'Juan@20',
  database : 'n19100190'

});

/**
 * @swagger
 * /Musica:
 *  post:
 *   description: Ingresa nueva informcion sobre un jugador
 *   responses:
 *    200:
 *     description: Esta permite dar de alta a un cantante con su nombre, nombre de la cancion mas famosa y URL de youtube de la cancion.
*/
router.post('/', async (req,res)=>{
  console.log(req.body)
  connection.query(` insert into musicamx (Nombre,NombreCancion,Cancion) values('${req.body.Nombre}','${req.body.NombreCancion}','${req.body.Cancion}');`, function (error, results, fields) {
    if (error) throw error;
    console.log(results);
    res.send(results);  
  });
 
})
/**
 * @swagger
 * /Musica/Random:
 *  get:
 *   description: Informacion sobre un cantate y su cancion mas famosa en especifico aleatorio
 *   responses:
 *    200:
 *     description: Esta delvuelve la informacion de un cantante y su cancion mas famosa en especifico aleatoriamente.
*/
router.get('/Random', async (req, res) =>{
  var X = Math.floor(Math.random()*26);
    connection.query(`SELECT * FROM musicamx where id = ${X}`, function (error, results, fields) {
      if (error) throw error;
      console.log(results);
      res.send(results);  
  });
})

/**
 * @swagger
 * /Musica/:id:
 *  delete:
 *   description: Elimina la informacion sobre un cantate y su cancion mas famosa en especifico
 *   responses:
 *    200:
 *     description: Esto permite eliminar permanentemente la informacion todos los cantantes.
*/
router.delete('/:id', async (req, res) =>{
  console.log(req.params)
      connection.query(`delete from musicamx where id = ${req.params.id}`, function (error, results, fields) {
      if (error) throw error;
      const respuesta = results;
      console.log(results);
      res.send(results);  
  });
})

/**
 * @swagger
 * /Musica/:ID:
 *  put:
 *   description: Modifica la informacion sobre un cantate y su cancion mas famosa en especifico
 *   responses:
 *    200:
 *     description: Esto permite modificar la informacion de un cantate.
*/
router.put('/:ID', async (req,res)=>{
  console.log(req.body)
  connection.query(`update musicamx set Nombre = '${req.body.Nombre}', NombreCancion= '${req.body.NombreCancion}', Cancion = '${req.body.Cancion}' where id =${req.params.ID}`, function (error, results, fields) {
    if (error) throw error;
    console.log(results);
    res.send(results);  



  });
})



/**
 * @swagger
 * /Musica/:ID:
 *  get:
 *   description: Informacion sobre un cantate y su cancion mas famosa en especifico
 *   responses:
 *    200:
 *     description: Esta delvuelve la informacion de un cantante y su cancion mas famosa en especifico.
*/
router.get('/:ID', async (req, res) =>{
  console.log(req.params)

    connection.query(`SELECT * FROM musicamx where id = ${req.params.ID}`, function (error, results, fields) {
      if (error) throw error;
      console.log(results);
      res.send(results);  
  });
})

/**
 * @swagger
 * /Musica:
 *  get:
 *   description: Informacion de los cantates y sus canciones mas famosas
 *   responses:
 *    200:
 *     description: Esta delvuelve todos los cantates.
*/
router.get('/', async (req, res) =>{
  console.log(req.params)
   connection.query(`SELECT * FROM musicamx`, function (error, results, fields) {
      if (error) throw error;
      console.log(results);
      res.send(results);  
  });
})



module.exports.router = router;