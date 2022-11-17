const e = require('cors');
const express = require('express');
const app = express.Router();
const movimientoControler = require("../controler/movimiento_controler.js");

app.get("/:id/:status/", async function(req,res){
        const data = {
            id : req.params.id,
            status : req.params.status
        }
        
        const respuesta = await movimientoControler.agregarDato(data);
        res.json(respuesta);
    
})

app.get("/:id", async function(req,res){
    const id =  req.params.id;
    const respuesta = await movimientoControler.devolverDato(id);
        res.json(respuesta);
})




module.exports = app;