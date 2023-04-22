const e = require('cors');
const express = require('express');
const app = express.Router();
const RealTimeControler = require("../controler/rTTempHum_controler.js");



app.get("/:id", async function(req,res){
    const id =  req.params.id;
    const respuesta = await RealTimeControler.devolverDato(id);
        res.json(respuesta);
})




module.exports = app;