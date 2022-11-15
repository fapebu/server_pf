const model = require("../model/aperturaPuerta");
module.exports = {

    aperturaPuerta: async function(data){
            
            const response = await model.aperturaPuerta(data)
            return response;

     
    },
    
    statusPuerta: async function(id){
            
        const response = await model.statusPuerta(id);
        return response;
    }


}