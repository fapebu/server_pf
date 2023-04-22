var conexion = require("../db");

module.exports = {
    devolverDato: async function(id){
        try {
              
              const query = 'SELECT * FROM `temperatura` WHERE ID=? ORDER by id ASC LIMIT 1';
              
              const respuesta = await conexion.query(query, [id]);
              
              if (respuesta.length === 0) {
                  throw new Error("Error al seleccionar el ultimo dato de la tabla temperatura");
              }
             
  
              return respuesta;
        }
        catch (e) {
          console.error("error:"+ e.message);
          return e.message;
        }
      }

}