const express = require('express');
var fs = require('fs');
const cors = require('cors');

var morgan = require('morgan');
var path = require('path');



//const cadenas = require('./cadena2')




//aqui solo traemos los metodos que queremos en especificos
const {pasarmayusculas,quitarespacios} = require('./cadena2')
const app = express();




app.use(cors({origin:"http://localhost"}))
app.use(express.text())
app.use(express.json())

 
// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
 
// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))

app.use((req,res,next)=>{
    

    next()
    console.log("Primera funcion procesando.....")
    //next()
},(req,res,next)=>{
    console.log("Segunda funcion procesando......")
    next()
})

app.get('/', (req, res,next) => {
    res.send('Servidor Express contestando')
   
    res.sendFile('./static/index.html',{root:__dirname},(err)=>{console.log('Archivo enviado')})

})

app.get('/Mayusculas/:cadena',(req,res)=>{
    console.log(req.params)
    res.send(req.params)
})

app.post('/', (req, res) => {
    //res.send('EPICO ')
    res.json({Usuario : 'pedro'})

})

app.post('/Textito',(req,res)=>{
    console.log(req.body)
    /*let may = req.body.toUpperCase()
    let sinesp = req.body.trim()
    let Longi = req.body.length*/

    //Estos se utilizan cuando utilizamos el modulo cadena.js
    //let may = cadenas.pasarmayusculas(req.body);
    //let sinesp = cadenas.quitarespacios(req.body);
    //let Longi = cadenas.Longitud(req.body);

    //Aqui solo nos traemos las Constatntes con funcion flecha que estan aqui como se ve en la linea 6
    let may = pasarmayusculas(req.body);
    let sinesp = quitarespacios(req.body);
    res.json ({ Mayusculas: may,
    SinEspacios :sinesp//,
    //Longitud: Longi
    })
})

app.post('/json',(req,res)=>{
    console.log(req.body.nombre)
    let cadena = "Hola " + req.body.nombre + " " + req.body.apellido +" ¿Como Estas? :D"
    res.json({Saludo : cadena})
})
//Winston,morgan
app.get('/Suma',(req, res) =>{
    console.log(req.params)
    let sumita = parseInt(req.query.x) + parseInt(req.query.y)
    res.send('La suma es' + sumita )
})

app.use((req, res) => {
    //res.send('Servidor Express contestando')
    
    res.status(404).sendFile('./static/404.html',{root:__dirname},(err)=>{console.log("archivo no encontrado")})

})

app.listen(8081,() => {
    console.log('Servidor express escuchando en proceso ')
    console.log(__dirname)
    console.log(__filename)
})