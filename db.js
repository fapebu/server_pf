const mysql = require('mysql');
const util = require('util');
const auth = require("./settings");
var db;

function  connectDatabase(){
    if(!db){
        db = mysql.createConnection(auth.authDb());
        
        db.connect((error) => {
            if (!error) {
                console.log('Conexion con la base de datos mysql establecida');
            }
            else{
                console.log('No se pudo establecer la conexion con la base de datos');
            }
        
        });
    }
        db.query = util.promisify(db.query); //transformamos la funcion en una promesa.
        /*const query = 'SELECT * FROM entrada WHERE id = ?';
        const respuesta = await dbp(query, 1);
        console.log(respuesta);*/
        return db;



}
module.exports =  connectDatabase();