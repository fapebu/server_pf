var conexion = require("../db");

module.exports = {
    agregarVisitante: async function(data){
      try {
            
            const query = 'INSERT INTO visitantes (nombre,apellido,huesped,fecha,hora) VALUES(?,?,?,?,?)';
            
            const respuesta = await conexion.query(query, [data.nombre,data.apellido,data.huesped,data.fecha,data.hora]);
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
    
    devuelveTodos: async function(id){
      try {
            
            const query = 'SELECT * FROM `visitantes` ORDER BY register DESC LIMIT 30';
            
            const respuesta = await conexion.query(query);
            
            if (respuesta.length === 0) {
                throw new Error("No se encontro ese id");
       }
        return respuesta;
    }
      catch (e) {
        console.error("error:"+ e.message);
        return e.message;
    }
    },
    

}