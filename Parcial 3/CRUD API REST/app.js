
const express = require('express');
const path = require('path');
const app = express();
const ruta = require('./router/router');
app.use(express.text())
app.use(express.json())
const swaggerUI     = require('swagger-ui-express');
const swaggerJsDoc  = require('swagger-jsdoc');

const { Console } = require('console');
//const { Router } = require('express');
const swaggerOptions = {
  definition:{
    openapi : '3.0.0',
    info:{
      title: 'Api Music',
      version : '1.0.0',
    },
      servers:[
        {url:'http://localhot:8081'}
      ],
  },
  apis: [`${path.join(__dirname,"./router/router.js")}`],
};


app.use("/Musica",ruta.router)




const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs",swaggerUI.serve,swaggerUI.setup(swaggerDocs));

app.listen(8081,() => {
  console.log('Servidor express escuchando en proceso ')
  console.log(__dirname)
  console.log(__filename)
})