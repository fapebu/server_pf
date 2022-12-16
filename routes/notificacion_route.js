const e = require('cors');
const express = require('express');
const app = express.Router();
const notificacionControler = require("../controler/notificacion_controler.js");

app.get("/:id/:info/:color/", async function(req,res){
        const data = {
            id : req.params.id,
            info : req.params.info,
            color : req.params.color,
        }
        
        const respuesta = await notificacionControler.agregarDato(data);
        res.json(respuesta);
    
})

app.get("/:id", async function(req,res){
    const id =  req.params.id;
    const respuesta = await notificacionControler.devolverDato(id);
        res.json(respuesta);
})

app.get("/leido/:register", async function(req,res){
    const reg =  req.params.register;
    const respuesta = await notificacionControler.leido(reg);
   
        res.json(respuesta);
})

app.get("/noleido/:id", async function(req,res){
    const id =  req.params.id;
    const respuesta = await notificacionControler.noleido(id);
        res.json(respuesta);
})



module.exports = app;