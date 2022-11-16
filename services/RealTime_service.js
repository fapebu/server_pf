const model = require("../model/realTime.js");
module.exports = {

    devolverDato: async function(id){
            
        const response = await model.devolverDato(id);
        return response;
    },
    



}
