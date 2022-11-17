var conexion = require("../db");

module.exports = {
    agregarDato: async function(data){
      try {
            
            const query = 'UPDATE `movimiento` SET `id` = ? , `status_movimiento` = ? WHERE `id` = ? ';
            const respuesta = await conexion.query(query, [data.id,data.status,data.id]);
            
            if (respuesta.affectedRows == 0) {
                const query = 'INSERT INTO `movimiento`(`id`, `status_movimiento`) VALUES (?,?)';
                const respuesta = await conexion.query(query, [data.id,data.status]);
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
            
            const query = 'SELECT * FROM `movimiento` WHERE id = ?';
            
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