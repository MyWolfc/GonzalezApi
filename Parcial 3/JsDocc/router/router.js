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

router.delete('/:id', async (req, res) =>{
  console.log(req.params)
      connection.query(`delete from jugadores where idID = ${req.params.id}`, function (error, results, fields) {
      if (error) throw error;
      const respuesta = results;
      console.log(results);
      res.send(results);  
  });
})

router.post('/', async (req,res)=>{
  console.log(req.body)
  connection.query(`insert into jugadores(NombreCom,NombreDelJuego,Rango,Edad,Pais) values('${req.body.NombreCom}','${req.body.NombreDelJuego}','${req.body.Rango}',${req.body.Edad},'${req.body.Pais}')`, function (error, results, fields) {
    if (error) throw error;
    console.log(results);
    res.send(results);  



  });
})


router.get('/:ID', async (req, res) =>{
  console.log(req.params)

    connection.query(`SELECT * FROM jugadores where idID = ${req.params.ID}`, function (error, results, fields) {
      if (error) throw error;
      console.log(results);
      res.send(results);  
  });
})

router.get('/', async (req, res) =>{
  console.log(req.params)
   connection.query(`SELECT * FROM jugadores`, function (error, results, fields) {
      if (error) throw error;
      console.log(results);
      res.send(results);  
  });
})

module.exports.router = router;