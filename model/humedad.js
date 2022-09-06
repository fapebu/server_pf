var conexion = require("../db");

module.exports = {
    agregarDato: async function(data){
      try {
            
            const query = 'UPDATE `humedad` SET `id` = ? , `humedad` = ? WHERE `id` = ? ';
            const respuesta = await conexion.query(query, [data.id,data.humedad,data.id]);
            
            if (respuesta.affectedRows == 0) {
                const query = 'INSERT INTO `humedad`(`id`, `humedad`) VALUES (?,?)';
                const respuesta = await conexion.query(query, [data.id,data.humedad]);
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
            
            const query = 'SELECT * FROM `humedad` WHERE id = ?';
            
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