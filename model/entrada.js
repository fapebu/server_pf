var conexion = require("../db");

module.exports = {
    agregarEntrada: async function(data){
      try {
            
            const query = 'INSERT INTO  entrada (id,fecha,hora) VALUES(?,?,?)';
            
            const respuesta = await conexion.query(query, [data.id,data.fecha,data.hora]);
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
    devuelveEntrada: async function(id){
      try {
            
            const query = 'SELECT * FROM `entrada` WHERE id = ?';
            
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
    },

    devuelveTodos: async function(id){
      try {
            
            const query = 'SELECT * FROM `entrada`';
            
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
    }
}