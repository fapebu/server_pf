const entradaService = require("../services/aperturaPuerta_service");
module.exports = {
    aperturaPuerta: async function(id){
        try {
            
            if(isNaN(id)){
                throw new Error ("Id no valido");
            }
            
            
        const entrada = await entradaService.aperturaPuerta(id);
        return entrada;
        }   
        catch (error) {
            return {
                    error: error.message
                    };
        }
    },

    clearNotPuerta: async function(id){
        try {
            
            if(isNaN(id)){
                throw new Error ("Id no valido");
            }
            
            
        const entrada = await entradaService.clearNotPuerta(id);
        return entrada;
        }   
        catch (error) {
            return {
                    error: error.message
                    };
        }
    }

}