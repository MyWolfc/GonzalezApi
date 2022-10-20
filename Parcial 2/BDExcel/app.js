var mysql = require('mysql');
const express = require('express');
const app = express();
var fs = require('fs');
let exelito = require('json2xls');
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
  //cuadno lo manda a traves del header
  console.log(req.params)
  //cuando trae el body!
  //console.log(req.query.ID);
  //                                aqui cambias la tabla por la que tengas en tu base datos
    connection.query(`SELECT * FROM jugadores where idID = ${req.params.ID}`, function (error, results, fields) {
      if (error) throw error;
      console.log(results);
      res.send(results);  
  });
})
app.get('/Jugadores',(req, res) =>{
  //cuadno lo manda a traves del header
  console.log(req.params)
  //cuando trae el body!
  //console.log(req.query.ID);
  //                                aqui cambias la tabla por la que tengas en tu base datos
    connection.query(`SELECT * FROM jugadores`, function (error, results, fields) {
      if (error) throw error;
      console.log(results);
      res.send(results);  
  });
})
/*
connection.connect();
 
connection.query('SELECT * FROM pruebaidentificador', function (error, results, fields) {
  if (error) throw error;
  console.log(results);
  
  console.log("HOla");
  var xls = exelito(results);
  fs.writeFileSync(`${__dirname}/excel/data.xlsx`,xls,'binary');
  
});
 
connection.end();
*/
app.listen(8081,() => {
  console.log('Servidor express escuchando en proceso ')
  console.log(__dirname)
  console.log(__filename)
})