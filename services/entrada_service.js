const model = require("../model/entrada");
module.exports = {

    agregarEntrada: async function(data){
            
            const response = await model.agregarEntrada(data)
            return response;

     
    },
    devuelveEntrada: async function(id){
            
        const response = await model.devuelveEntrada(id);
        return response;
    },
    devuelveTodos: async function(id){
            
        const response = await model.devuelveTodos();
        return response;
    },
    
    devuelveStatus: async function(id){
            
        const response = await model.devuelveStatus();
        return response;
    }

}