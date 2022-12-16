const model = require("../model/notificacion.js");
module.exports = {

    agregarDato: async function(data){
            
            const response = await model.agregarDato(data)
            return response;

    },
    devolverDato: async function(id){
            
        const response = await model.devolverDato(id);
        return response;
    },

    leido: async function(reg){
            
        const response = await model.leido(reg);
        return response;
    },
    
    noleido: async function(id){
            
        const response = await model.noleido(id);
        return response;
    },


}