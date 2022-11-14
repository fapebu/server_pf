const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT ? process.env.PORT : 3001;
app.use(express.json());
app.use(cors());
const rutasPersonas = require('./routes/entrada_route');
const rutasPuertas = require('./routes/aperturaPuerta_route');
const rutasMonoxido = require('./routes/monoxido_route');
const rutasTempratura = require('./routes/temperatura_route');
const rutasHumedad = require('./routes/humedad_route');
//asignamos las rutas
app.use("/entrada",rutasPersonas);

app.use("/aperturaPuerta",rutasPuertas);

app.use("/monoxido",rutasMonoxido);

app.use("/temperatura",rutasTempratura);

app.use("/humedad",rutasHumedad);

app.listen(port, function () {
console.log('Server iniciado en el puerto: ' + port);
});