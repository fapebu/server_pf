var conexion = require("../db");

module.exports = {
    agregarDato: async function(data){
      try {
            
            const query = 'UPDATE `monoxido` SET `id` = ? , `ppm` = ? WHERE `id` = ? ';
            const respuesta = await conexion.query(query, [data.id,data.ppm,data.id]);
            
            if (respuesta.affectedRows == 0) {
                const query = 'INSERT INTO `monoxido`(`id`, `ppm`) VALUES (?,?)';
                const respuesta = await conexion.query(query, [data.id,data.ppm]);
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
            
            const query = 'SELECT * FROM `monoxido` WHERE id = ?';
            
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