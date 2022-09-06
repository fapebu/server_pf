const e = require('cors');
const express = require('express');
const app = express.Router();
const aperturaPuertaControler = require("../controler/aperturaPuerta_controler");

app.get("/:id", async function(req,res){
    const id =  req.params.id;
    const entrada = await aperturaPuertaControler.aperturaPuerta(id);
    res.json(entrada);
})

app.get("/clear/:id/", async function(req,res){
    const id =  req.params.id;
    const entrada = await aperturaPuertaControler.clearNotPuerta(id);
    res.json(entrada);

})


module.exports = app;