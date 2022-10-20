var mysql = require('mysql');
const express = require('express');
const app = express();
app.use(express.text())
app.use(express.json())
const { Console } = require('console');
var connection = mysql.createConnection({

  host : 'localhost',
  user : 'root',
  password : 'password',
  database : 'n19100190'

});

app.delete('/Jugadores/id/:id',(req, res) =>{
  console.log(req.params)
    connection.query(`delete from jugadores where idID = ${req.params.id}`, function (error, results, fields) {
      if (error) throw error;
      console.log(results);
      res.send(results);  
  });
})

app.put('/Jugadores',(req,res)=>{
  console.log(req.body)
  connection.query(`update jugadores set NombreCom = '${req.body.NombreCom}',NombreDelJuego = '${req.body.NombreDelJuego}',Rango = '${req.body.Rango}',Edad = ${req.body.Edad},Pais = '${req.body.Pais}' where idID =${req.body.id}`, function (error, results, fields) {
    if (error) throw error;
    console.log(results);
    res.send(results);  



  });
})
app.post('/Jugadores',(req,res)=>{
  console.log(req.body)
  connection.query(`insert into jugadores(NombreCom,NombreDelJuego,Rango,Edad,Pais) values('${req.body.NombreCom}','${req.body.NombreDelJuego}','${req.body.Rango}',${req.body.Edad},'${req.body.Pais}')`, function (error, results, fields) {
    if (error) throw error;
    console.log(results);
    res.send(results);  



  });
})



app.get('/Jugadores/id/:ID',(req, res) =>{
  console.log(req.params)

    connection.query(`SELECT * FROM jugadores where idID = ${req.params.ID}`, function (error, results, fields) {
      if (error) throw error;
      console.log(results);
      res.send(results);  
  });
})
app.get('/Jugadores',(req, res) =>{
  console.log(req.params)
   connection.query(`SELECT * FROM jugadores`, function (error, results, fields) {
      if (error) throw error;
      console.log(results);
      res.send(results);  
  });
})

app.listen(8081,() => {
  console.log('Servidor express escuchando en proceso ')
  console.log(__dirname)
  console.log(__filename)
})