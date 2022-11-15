const entradaService = require("../services/aperturaPuerta_service");
module.exports = {
    aperturaPuerta: async function(data){
        try {
            
            if(isNaN(data.id)){
                throw new Error ("Id no valido");
            }
            
            
        const entrada = await entradaService.aperturaPuerta(data);
        return entrada;
        }   
        catch (error) {
            return {
                    error: error.message
                    };
        }
    },



    statusPuerta: async function(id){
        try {
            
            if(isNaN(id)){
                throw new Error ("Id no valido");
            }
            
            
        const entrada = await entradaService.statusPuerta(id);
        return entrada;
        }   
        catch (error) {
            return {
                    error: error.message
                    };
        }
    }

}