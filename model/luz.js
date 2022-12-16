var conexion = require("../db");
//TODO: "ER_BAD_NULL_ERROR: Column 'status_luz' cannot be null" al intentar agregar un id nuevo
module.exports = {
    agregarDato: async function(data){
      try {
            
            const query = 'UPDATE `luz` SET `id` = ? , `status_luz` = ? WHERE `id` = ? ';
            const respuesta = await conexion.query(query, [data.id,data.status,data.id]);
            
            if (respuesta.affectedRows == 0) {
                const query = 'INSERT INTO `luz`(`id`, `status_luz`) VALUES (?,?)';
                const respuesta = await conexion.query(query, [data.id,data.status_luz]);
                if (respuesta.affectedRows == 0) {
                    throw new Error("error al insertar nueva entrada");
                }
            }

            return respuesta;
      }
      catch (e) {
        console.error("error:"+ e.message);
        return e.message;
      }
    },
    devolverDato: async function(id){
      try {
            
            const query = 'SELECT * FROM `luz` WHERE id = ?';
            
            const respuesta = await conexion.query(query, [id]);
            
            if (respuesta.length === 0) {
                throw new Error("No se encontro ese id");
            }
            

            return respuesta;
      }
      catch (e) {
        console.error("error:"+ e.message);
        return e.message;
      }
    }

}