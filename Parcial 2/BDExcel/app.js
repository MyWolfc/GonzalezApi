var mysql = require('mysql');
var fs = require('fs');
let exelito = require('json2xls');

const { Console } = require('console');
var connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : 'password',
  database : 'epicabasedatos'
});

connection.connect();
 
connection.query('SELECT * FROM pruebaidentificador', function (error, results, fields) {
  if (error) throw error;
  console.log(results);
  
  console.log("HOla");
  var xls = exelito(results);
  fs.writeFileSync(`${__dirname}/excel/data.xlsx`,xls,'binary');
  
});
 
connection.end();