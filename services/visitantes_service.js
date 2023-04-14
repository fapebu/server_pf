const model = require("../model/visitantes.js");
module.exports = {

    agregarVisitante: async function(data){
            
            const response = await model.agregarVisitante(data)
            return response;

     
    },
    
    devuelveTodos: async function(id){
            
        const response = await model.devuelveTodos();
        return response;
    },
    
    

}