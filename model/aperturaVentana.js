var conexion = require("../db");

module.exports = {
    aperturaVentana: async function(data){
      try {
            
      const query = 'UPDATE `aperturaventana` SET `id` = ? , `status_ventana` = ? WHERE `id` = ? ';
      const respuesta = await conexion.query(query, [data.id,data.status,data.id]);
      
      if (respuesta.affectedRows == 0) {
          const query = 'INSERT INTO  `aperturaventana` (id,status_ventana) VALUES(?,?)';
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
    
    statusVentana: async function(id){
      try {
            
            const query = 'SELECT * FROM aperturaventana WHERE id = ?';
            
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