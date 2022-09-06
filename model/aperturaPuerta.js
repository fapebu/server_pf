var conexion = require("../db");

module.exports = {
    aperturaPuerta: async function(id){
      try {
            
            const query = 'INSERT INTO  aperturapuerta (id,status) VALUES(?,?)';
            const respuesta = await conexion.query(query, [id,true]);
            
            if (respuesta.affectedRows == 0) {
                throw new Error("error al insertar nueva entrada");
            }

            return respuesta;
      }
      catch (e) {
        console.error("error:"+ e.message);
        return e.message;
      }
    },
    clearNotPuerta: async function(id){
      try {
            
            const query = 'DELETE FROM aperturapuerta WHERE id = ?';
            
            const respuesta = await conexion.query(query, [id]);
            
            if (respuesta.length === 0) {
                throw new Error("No se encontro ese id");
            }
            if (respuesta.affectedRows === 0) {
              throw new Error("No se elimino el dato");
            }

            return respuesta;
      }
      catch (e) {
        console.error("error:"+ e.message);
        return e.message;
      }
    }

}