const e = require('cors');
const express = require('express');
const app = express.Router();
const entradaControler = require("../controler/entrada_controler");
app.get("/", function(req,res){
    res.json("todas las entradas");
})

app.get("/new/:id/:fecha/:hora", function(req,res){
        const data = {
            id : req.params.id,
            fecha : req.params.fecha,
            hora : req.params.hora
        }

        console.log(data.id,data.fecha,data.hora);
        const entrada = entradaControler.agregarEntrada(data);
        res.json(entrada);
    
})

app.get("/:id", function(req,res){
    const id =  req.params.id;
    res.json("Muestra de la base de datos las entradas del id: " + id);
})




module.exports = app;