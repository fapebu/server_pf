const humedadService = require("../services/humedad_service.js");
module.exports = {
    agregarDato: async function(data){
        try {
            
            if(isNaN(data.id)|| isNaN(data.humedad) ){
                throw new Error ("Id o valor no valido");
            }
            
            
        const entrada = await humedadService.agregarDato(data);
        return entrada;
        }   
        catch (error) {
            return {
                    error: error.message
                    };
        }
    },

    devolverDato: async function(id){
        try {
            
            if(isNaN(id)){
                throw new Error ("Id no valido");
            }
            
            
        const entrada = await humedadService.devolverDato(id);
        return entrada;
        }   
        catch (error) {
            return {
                    error: error.message
                    };
        }
    }

}