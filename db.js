const mysql = require('mysql');
const util = require('util');
const {authDb} = require("./settings");
var db;

function connectDatabase(){
    if(!db){
        db = mysql.createConnection(authDb);
        
        db.connect((error) => {
            if (error) {
                console.log('Conexion con la base de datos mysql establecida');
            }
            else{
                console.log('No se pudo establecer la conexion con la base de datos');
            }
        
        });
        
        const dbp = util.promisify(db.query).bind(db); //transformamos la funcion en una promesa.
        return dbp
}


}
module.exports =  connectDatabase();