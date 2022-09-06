const e = require('cors');
const express = require('express');
const app = express.Router();
const monoxidoControler = require("../controler/monoxido_controler.js");

app.get("/:id/:ppm/", async function(req,res){
        const data = {
            id : req.params.id,
            ppm : req.params.ppm
        }
        
        const respuesta = await monoxidoControler.agregarDato(data);
        res.json(respuesta);
    
})

app.get("/:id", async function(req,res){
    const id =  req.params.id;
    const respuesta = await monoxidoControler.devolverDato(id);
        res.json(respuesta);
})




module.exports = app;