const e = require('cors');
const express = require('express');
const app = express.Router();
const aperturaVentanaControler = require("../controler/aperturaVentana_controler");

app.get("/:id/:status/", async function(req,res){
    const data = {
        id : req.params.id,
        status : req.params.status
    }
    
    const entrada = await aperturaVentanaControler.aperturaVentana(data);
    res.json(entrada);
})



app.get("/:id/", async function(req,res){
    const id =  req.params.id;
    const entrada = await aperturaVentanaControler.statusVentana(id);
    res.json(entrada);

})


module.exports = app;