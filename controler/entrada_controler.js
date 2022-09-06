const entradaService = require("../services/entrada_service");
module.exports = {

    agregarEntrada: async function(data){
        try {
            var date_regex = /^(0[1-9]|1[0-2])-(0[1-9]|1\d|2\d|3[01])-(0[1-9]|1[1-9]|2[1-9])$/;
            var hour_regex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/
            
            //formato de fecha "mm-dd-aa"
            if (!date_regex.test(data.fecha)) {
                throw new Error ("Fecha no valida se debe poner en formato mm-dd-aa");
            }
            //formato de hora "hh:mm"
            if (!hour_regex.test(data.hora)) {
                throw new Error ("Hora no valida");
            }
            if(isNaN(data.id)){
                throw new Error ("Id no valido");
            }
            const date = data.fecha.replaceAll('-', '/');
            data.fecha = date;
            
        const entrada = await entradaService.agregarEntrada(data)
        return entrada;
        }   
        catch (error) {
            return {
                    error: error.message
                    };
        }
    },

    devuelveEntrada: async function(id){
        try {
            
            if(isNaN(id)){
                throw new Error ("Id no valido");
            }
            
            
        const entrada = await entradaService.devuelveEntrada(id)
        return entrada;
        }   
        catch (error) {
            return {
                    error: error.message
                    };
        }
    },
    devuelveTodas: async function(){
        try {
            
            const entrada = await entradaService.devuelveTodos();
            return entrada;
        }   
        catch (error) {
            return {
                    error: error.message
                    };
        }
    }



}