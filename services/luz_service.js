const model = require("../model/luz.js");
module.exports = {

    agregarDato: async function(data){
            
            const response = await model.agregarDato(data)
            return response;

    },
    devolverDato: async function(id){
            
        const response = await model.devolverDato(id);
        return response;
    },
    



}