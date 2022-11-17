const e = require('cors');
const express = require('express');
const app = express.Router();
const luzControler = require("../controler/luz_controler.js");

app.get("/:id/:status/", async function(req,res){
        const data = {
            id : req.params.id,
            status : req.params.status
        }
        
        const respuesta = await luzControler.agregarDato(data);
        res.json(respuesta);
    
})

app.get("/:id", async function(req,res){
    const id =  req.params.id;
    const respuesta = await luzControler.devolverDato(id);
        res.json(respuesta);
})




module.exports = app;