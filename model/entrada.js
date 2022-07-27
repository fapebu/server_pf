var conexion = require("../db");

module.exports = {
    agregarEntrada: async function(date,id){
        const query =  'SELECT * FROM persona WHERE email=?'
        const result = await conexion.query(query,[date.getDate(),date.getHours()])
        return result
    }





}