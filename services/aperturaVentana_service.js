const model = require("../model/aperturaVentana");
module.exports = {

    aperturaVentana: async function(data){
            
            const response = await model.aperturaVentana(data)
            return response;

     
    },
    
    statusVentana: async function(id){
            
        const response = await model.statusVentana(id);
        return response;
    }


}