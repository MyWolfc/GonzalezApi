let http = require('http');
let servidor = http.createServer(function (req, res) {
    res.write('Servidor HTTP CONTESTANDO!!! ');
    res.end();
})

servidor.listen(8081);

//nodemon
//npm init -y
//instalar express 
//npm;express 