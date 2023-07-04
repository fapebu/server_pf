var conexion = require("../db");

module.exports = {
    
    devolverDato: async function(id){
      try {
        
            const query = 'SELECT aperturapuerta.status_puerta,luz.status_luz,movimiento.status_movimiento,aperturaventana.status_ventana,temperatura.temp,monoxido.ppm FROM aperturapuerta JOIN movimiento ON aperturapuerta.id = movimiento.id AND aperturapuerta.id = ? JOIN luz ON aperturapuerta.id = luz.id AND aperturapuerta.id = ? JOIN aperturaventana ON aperturapuerta.id = aperturaventana.id JOIN temperatura ON aperturapuerta.id = temperatura.id JOIN monoxido ON aperturapuerta.id = monoxido.id ORDER by temperatura.register DESC, monoxido.register DESC LIMIT 1';  
           
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