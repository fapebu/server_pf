var conexion = require("../db");

module.exports = {
    aperturaPuerta: async function(data){
      try {
            
      const query = 'UPDATE `aperturapuerta` SET `id` = ? , `status_puerta` = ? WHERE `id` = ? ';
      const respuesta = await conexion.query(query, [data.id,data.status,data.id]);
      
      if (respuesta.affectedRows == 0) {
          const query = 'INSERT INTO  `aperturapuerta` (id,status_puerta) VALUES(?,?)';
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
    
    statusPuerta: async function(id){
      try {
            
            const query = 'SELECT * FROM aperturapuerta WHERE id = ?';
            
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