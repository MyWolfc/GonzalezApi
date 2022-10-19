var mysql = require('mysql');
const express = require('express');
const app = express();
var fs = require('fs');
let exelito = require('json2xls');
app.use(express.text())
app.use(express.json())
const { Console } = require('console');
var connection = mysql.createConnection({
  //se queda igual
  host : 'localhost',
  user : 'root',
  //la contraseña de tu conexio
  password : 'password',
  //el nombre dee la base deee datos
  database : 'n19100190'
});

app.delete('/Eliminar/id/:ID',(req, res) =>{
  console.log(req.params)
  //            aqui cambias la tabla por la que tengas en tu base datos
    connection.query(`delete from jugadores where idID = ${req.params.ID}`, function (error, results, fields) {
      if (error) throw error;
      console.log(results);
      res.send(results);  
  });
})

app.put('/Modificar',(req,res)=>{
  console.log(req.body)
  connection.query(`update jugadores set NombreCom = '${req.body.NombreCom}',NombreDelJuego = '${req.body.NombreDelJuego}',Rango = '${req.body.Rango}',Edad = ${req.body.Edad},Pais = '${req.body.Pais}' where idID =${req.body.id}`, function (error, results, fields) {
    if (error) throw error;
    console.log(results);
    res.send(results);  



  });
})
app.post('/Alta',(req,res)=>{
  console.log(req.body)
  connection.query(`insert jugadores(NombreCom,NombreDelJuego,Rango,Edad,Pais) values('${req.body.NombreCom}','${req.body.NombreDelJuego}','${req.body.Rango}',${req.body.Edad},'${req.body.Pais}')`, function (error, results, fields) {
    if (error) throw error;
    console.log(results);
    res.send(results);  



  });
})



app.get('/Consulta/id/:ID',(req, res) =>{
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