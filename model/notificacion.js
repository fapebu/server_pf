var conexion = require("../db");
const { noleido } = require("../services/notificacion_service");

module.exports = {
    agregarDato: async function(data){
        try {
          
                  const query = 'INSERT INTO `notificacion`(`id`,`info`,`color`,`status_notificacion`) VALUES (?,?,?,?)';
                  const respuesta = await conexion.query(query, [data.id,data.info,data.color,false]);
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
            
            const query = 'SELECT * FROM `notificacion` WHERE id = ? ORDER BY register DESC LIMIT 5;';
            
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

    leido: async function(reg){
        try {
              
            const query = 'UPDATE `notificacion` SET `status_notificacion` = 0  WHERE `register` = ? ';
              
              const respuesta = await conexion.query(query, [reg]);
              
              if (respuesta.length === 0) {
                  throw new Error("No se encontro ese registro");
              }
              
  
              return respuesta;
        }
        catch (e) {
          console.error("error:"+ e.message);
          return e.message;
        }
      },

      noleido: async function(id){
        try {
              
              const query = 'SELECT * FROM `notificacion` WHERE id = ? AND `status_notificacion` = ?;';
              
              
              const respuesta = await conexion.query(query, [id,false]);
           
              if (respuesta.length === 0) {
                  throw new Error("No se encontro ese id o register");
              }
              
  
              return respuesta;
        }
        catch (e) {
          console.error("error:"+ e.message);
          return e.message;
        }
      },

}