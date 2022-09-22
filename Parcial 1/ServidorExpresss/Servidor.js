const http=require('http');
const servidor=http.createServer((reg,res)=>{ // creando servidor y prendiendo 
res.end("servidor HTTP de nodejs respondiente");
});
servidor.listen(8081,()=>{console.log('Servidor corriendo y escuchando un puerto 8080')}); // servidor del wamp 

//code runner













