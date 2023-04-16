const entradaService = require("../services/aperturaVentana_service");
module.exports = {
    aperturaVentana: async function(data){
        try {
            
            if(isNaN(data.id)){
                throw new Error ("Id no valido");
            }
            
            
        const entrada = await entradaService.aperturaVentana(data);
        return entrada;
        }   
        catch (error) {
            return {
                    error: error.message
                    };
        }
    },



    statusVentana: async function(id){
        try {
            
            if(isNaN(id)){
                throw new Error ("Id no valido");
            }
            
            
        const entrada = await entradaService.statusVentana(id);
        return entrada;
        }   
        catch (error) {
            return {
                    error: error.message
                    };
        }
    }

}