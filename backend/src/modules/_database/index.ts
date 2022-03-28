const mysql = require('mysql2');
require('dotenv').config();

class database {
    static start(host: any, user: any, password: any, database: any, connectionLimit: any) {
        try {
            var conn = mysql.createPool({
                host: host,
                user: user,
                password: password,
                database: database,
                connectionLimit: connectionLimit 
            })
            console.log('Database connected!');
        } catch(err) {
            return err;
        }
    }
}

module.exports = database;