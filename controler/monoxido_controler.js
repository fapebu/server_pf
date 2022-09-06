const monoxidoService = require("../services/monoxido_service.js");
module.exports = {
    agregarDato: async function(data){
        try {
            
            if(isNaN(data.id)|| isNaN(data.ppm) ){
                throw new Error ("Id no valido");
            }
            
            
        const entrada = await monoxidoService.agregarDato(data);
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
            
            
        const entrada = await monoxidoService.devolverDato(id);
        return entrada;
        }   
        catch (error) {
            return {
                    error: error.message
                    };
        }
    }

}