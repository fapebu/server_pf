const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT ? process.env.PORT : 3000;
app.use(express.json());
const rutasPersonas = require('./routes/entrada_route');

//asignamos las rutas
app.use("/entrada",rutasPersonas);



app.listen(3000, function () {
console.log('Server iniciado en el puerto: ' + port);
});