const temperaturaService = require("../services/temperatura_service.js");
module.exports = {
    agregarDato: async function(data){
        try {
            
            if(isNaN(data.id)|| isNaN(data.temp) ){
                throw new Error ("Id no valido");
            }
            
            
        const entrada = await temperaturaService.agregarDato(data);
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
            
            
        const entrada = await temperaturaService.devolverDato(id);
        return entrada;
        }   
        catch (error) {
            return {
                    error: error.message
                    };
        }
    },
    ultimoDato: async function(data){
        try {
            
            if(isNaN(data.id)|| isNaN(data.temp)){
                throw new Error ("Id y temperatura no validos");
            }
            
            
        const entrada = await temperaturaService.ultimoDato(data);
        return entrada;
        }   
        catch (error) {
            return {
                    error: error.message
                    };
        }
    }

}