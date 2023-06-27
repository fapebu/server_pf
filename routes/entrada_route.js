const e = require('cors');
const express = require('express');
const app = express.Router();
const entradaControler = require("../controler/entrada_controler");
app.get("/", async function(req,res){
    const entrada = await entradaControler.devuelveIngresos();
        res.json(entrada);
})

app.get("/:id/:fecha/:hora/:status", async function(req,res){
        const data = {
            id : req.params.id,
            fecha : req.params.fecha,
            hora : req.params.hora,
            status: req.params.status
        }
        const entrada = await entradaControler.agregarEntrada(data);
        res.json(entrada);
    
})

app.get("/status/:id", async function(req,res){
    const id =  req.params.id;
    const entrada = await entradaControler.devuelveStatus(id);
        res.json(entrada);
})

app.get("/all/", async function(req,res){
    
    const entrada = await entradaControler.devuelveTodas();
        res.json(entrada);
})

app.get("/:id", async function(req,res){
    const id =  req.params.id;
    const entrada = await entradaControler.devuelveEntrada(id);
        res.json(entrada);
})


module.exports = app;