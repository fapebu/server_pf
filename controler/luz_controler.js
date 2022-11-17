const luzService = require("../services/luz_service.js");
module.exports = {
    agregarDato: async function(data){
        try {
            
            if(isNaN(data.id)|| (data.status == null) ){
                console.log(data)
                throw new Error ("Id o valor no valido");
            }
            
            
        const entrada = await luzService.agregarDato(data);
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
            
            
        const entrada = await luzService.devolverDato(id);
        return entrada;
        }   
        catch (error) {
            return {
                    error: error.message
                    };
        }
    }

}