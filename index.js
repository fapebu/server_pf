const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT ? process.env.PORT : 3001;//REMPLAZAR POR EL PUERTO QUE SE QUIERA
const bodyParser = require('body-parser')
app.use(express.json());
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
const IP = "localhost"; //REMPLAZAR IP 
const rutasPersonas = require('./routes/entrada_route');
const rutasPuertas = require('./routes/aperturaPuerta_route');
const rutasVentanas = require('./routes/aperturaVentana_route');
const rutasMonoxido = require('./routes/monoxido_route');
const rutasTempratura = require('./routes/temperatura_route');
const rutasHumedad = require('./routes/humedad_route');
const rutasLuz = require('./routes/luz_route');
const rutasMovimiento = require('./routes/movimiento_route');
const rutasRealTime = require('./routes/realTime_route');
const rutasRTTempHum = require('./routes/rTTempHum_route');
const rutasNotificacion = require('./routes/notificacion_route.js');
const rutasVisitantes = require('./routes/visitantes_route.js');
//asignamos las rutas
app.use("/entrada",rutasPersonas);

app.use("/aperturaPuerta",rutasPuertas);

app.use("/aperturaVentana",rutasVentanas);

app.use("/monoxido",rutasMonoxido);

app.use("/temperatura",rutasTempratura);

app.use("/humedad",rutasHumedad);

app.use("/luz",rutasLuz);

app.use("/movimiento",rutasMovimiento);

app.use("/realtime",rutasRealTime);

app.use("/rtTempHum",rutasRTTempHum);

app.use("/notificacion",rutasNotificacion);

app.use("/visitantes",rutasVisitantes);

app.listen(port,IP, function () {
console.log('Server iniciado en el puerto: ' + port);
});