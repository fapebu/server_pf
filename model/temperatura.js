var conexion = require("../db");

module.exports = {
    agregarDato: async function(data){
      try {
            
            const query = 'UPDATE `temperatura` SET `id` = ? , `temp` = ? WHERE `id` = ? ';
            const respuesta = await conexion.query(query, [data.id,data.temp,data.id]);
            
            if (respuesta.affectedRows == 0) {
                const query = 'INSERT INTO `temperatura`(`id`, `temp`) VALUES (?,?)';
                const respuesta = await conexion.query(query, [data.id,data.temp]);
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
            
            const query = 'SELECT * FROM `temperatura` WHERE id = ?';
            
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