const express = require('express');
var fs = require('fs');
var morgan = require('morgan');
var path = require('path');
const app = express();

app.use(express.text())
app.use(express.json())

 
// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
 
// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))

app.use((req,res,next)=>{
    console.log("Primera funcion procesando.....")
    next()
},(req,res,next)=>{
    console.log("Segunda funcion procesando......")
    next()
})

app.get('/', (req, res) => {
    //res.send('Servidor Express contestando')
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
    let may = req.body.toUpperCase()
    let sinesp = req.body.trim()
    let Longi = req.body.length
    res.json ({ Mayusculas: may,
    SinEspacios :sinesp,
    Longitud: Longi
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