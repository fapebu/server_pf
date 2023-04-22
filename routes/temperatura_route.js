const e = require('cors');
const express = require('express');
const app = express.Router();
const temperaturaControler = require("../controler/temperatura_controler.js");

app.get("/:id/:temp/:hora/", async function(req,res){
        const data = {
            id : req.params.id,
            temp : req.params.temp,
            hora : req.params.hora
        }
        
        const respuesta = await temperaturaControler.agregarDato(data);
        res.json(respuesta);
    
})

app.get("/:id", async function(req,res){
    const id =  req.params.id;
    const respuesta = await temperaturaControler.devolverDato(id);
        res.json(respuesta);
})

app.get("/:id/:temp", async function(req,res){
    const data ={
         id : req.params.id,
         temp : temp = req.params.temp
    }
    const respuesta = await temperaturaControler.ultimoDato(data);
        res.json(respuesta);
})

module.exports = app;