const e = require('cors');
const express = require('express');
const app = express.Router();
const visitantesControler = require("../controler/visitantes_controler.js");
app.get("/", async function(req,res){
    const entrada = await visitantesControler.devuelveTodas();
        res.json(entrada);
})

    app.post('/', async function (req, res)  {
              
        const data = {
            nombre : req.body.nombre,
            apellido : req.body.apellido,
            huesped:req.body.huesped,
            fecha : req.body.fecha,
            hora : req.body.hora,
            
        }
        const entrada = await visitantesControler.agregarVisitante(data);
        res.json(entrada);
    
})

app.get("/all/", async function(req,res){
    
    const entrada = await visitantesControler.devuelveTodas();
        res.json(entrada);
})



module.exports = app;