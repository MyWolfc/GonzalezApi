const express = require('express');
const app = express();

app.get('/', (req, res) => {
    //res.send('Servidor Express contestando')
    res.sendFile('./static/index.html',{root:__dirname},(err)=>{console.log('Archivo enviado')})

})

app.post('/', (req, res) => {
    //res.send('EPICO ')
    res.json({Usuario : 'pedro'})

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