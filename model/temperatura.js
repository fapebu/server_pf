var conexion = require("../db");

module.exports = {
    agregarDato: async function(data){
      try {
              const query = 'INSERT INTO `temperatura`(`id`,`temp`,`hora`) VALUES (?,?,?)';
                const respuesta = await conexion.query(query, [data.id,data.temp,data.hora]);
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
    devolverDato: async function(id){
      try {
            
            const query = 'SELECT * FROM `temperatura` WHERE id = ? ORDER BY register DESC LIMIT 48';
            
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