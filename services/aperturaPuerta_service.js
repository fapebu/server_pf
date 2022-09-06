const model = require("../model/aperturaPuerta");
module.exports = {

    aperturaPuerta: async function(id){
            
            const response = await model.aperturaPuerta(id)
            return response;

     
    },
    clearNotPuerta: async function(id){
            
        const response = await model.clearNotPuerta(id);
        return response;
    }
    



}