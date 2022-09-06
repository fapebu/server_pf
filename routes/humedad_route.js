const e = require('cors');
const express = require('express');
const app = express.Router();
const humedadControler = require("../controler/humedad_controler.js");

app.get("/:id/:humedad/", async function(req,res){
        const data = {
            id : req.params.id,
            humedad : req.params.humedad
        }
        
        const respuesta = await humedadControler.agregarDato(data);
        res.json(respuesta);
    
})

app.get("/:id", async function(req,res){
    const id =  req.params.id;
    const respuesta = await humedadControler.devolverDato(id);
        res.json(respuesta);
})




module.exports = app;