const e = require('cors');
const express = require('express');
const app = express.Router();
const aperturaPuertaControler = require("../controler/aperturaPuerta_controler");

app.get("/insert/:id/:status/", async function(req,res){
    const data = {
        id : req.params.id,
        status : req.params.status
    }
    
    const entrada = await aperturaPuertaControler.aperturaPuerta(data);
    res.json(entrada);
})



app.get("/status/:id/", async function(req,res){
    const id =  req.params.id;
    const entrada = await aperturaPuertaControler.statusPuerta(id);
    res.json(entrada);

})


module.exports = app;