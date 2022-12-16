const notificacionService = require("../services/notificacion_service.js");
module.exports = {
    agregarDato: async function(data){
        try {
            
            if(isNaN(data.id)|| (data.info == null) ){
                
                throw new Error ("Id no valido o falta informacion a mostrar");
            }
            
            
        const entrada = await notificacionService.agregarDato(data);
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
            
            
        const entrada = await notificacionService.devolverDato(id);
        return entrada;
        }   
        catch (error) {
            return {
                    error: error.message
                    };
        }
    },

    leido: async function(reg){
        try {
            
            if(isNaN(reg)){
                throw new Error ("reg no valido");
            }
            
            
        const entrada = await notificacionService.leido(reg);
        return entrada;
        }   
        catch (error) {
            return {
                    error: error.message
                    };
        }
    },
    noleido: async function(id){
        try {
            
            if(isNaN(id)){
                throw new Error ("Id no valido");
            }
            
            
        const entrada = await notificacionService.noleido(id);
        return entrada;
        }   
        catch (error) {
            return {
                    error: error.message
                    };
        }
    },

}