const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT ? process.env.PORT : 3001;//REMPLAZAR POR EL PUERTO QUE SE QUIERA
app.use(express.json());
app.use(cors());
const IP = "localhost"; //REMPLAZAR IP 
const rutasPersonas = require('./routes/entrada_route');
const rutasPuertas = require('./routes/aperturaPuerta_route');
const rutasMonoxido = require('./routes/monoxido_route');
const rutasTempratura = require('./routes/temperatura_route');
const rutasHumedad = require('./routes/humedad_route');
const rutasLuz = require('./routes/luz_route');
const rutasMovimiento = require('./routes/movimiento_route');
const rutasRealTime = require('./routes/realTime_route');
//asignamos las rutas
app.use("/entrada",rutasPersonas);

app.use("/aperturaPuerta",rutasPuertas);

app.use("/monoxido",rutasMonoxido);

app.use("/temperatura",rutasTempratura);

app.use("/humedad",rutasHumedad);

app.use("/luz",rutasLuz);

app.use("/movimiento",rutasMovimiento);

app.use("/realtime",rutasRealTime);

app.listen(port,IP, function () {
console.log('Server iniciado en el puerto: ' + port);
});