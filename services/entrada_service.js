const model = require("../model/entrada");
module.exports = {

    agregarEntrada: function(data){

            const date = new Date(data.fecha+" "+data.hora);
            console.log(date.getDate());
            const response = model.agregarEntrada(date,data.id)
            return true;

     
    }





}