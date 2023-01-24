var conexion = require("../db");

module.exports = {
    
    devolverDato: async function(id){
      try {
        
            const query = 'SELECT aperturapuerta.status_puerta,luz.status_luz,movimiento.status_movimiento FROM aperturapuerta JOIN movimiento ON aperturapuerta.id = movimiento.id AND aperturapuerta.id = ? JOIN luz ON aperturapuerta.id = luz.id AND aperturapuerta.id = ?';
            
            const respuesta = await conexion.query(query, [id,id]);
            
            const ret = respuesta[0];
            if (respuesta.length === 0) {
                throw new Error("No se encontro ese id");
            }
            

            return ret;
      }
      catch (e) {
        console.error("error:"+ e.message);
        return e.message;
      }
    }

}