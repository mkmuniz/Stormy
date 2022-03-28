const mysql = require('mysql2');

export function dbQuery(sqlQry: string){
    const connection = mysql.createPool({
        host: process.env.HOST,
        user: process.env.USERNAME,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
        connectionLimit: process.env.LIMIT
    })
   
    connection.query(sqlQry, function(error: any, results: any, fields: any){
        if(error) 
          console.log(error);
        else
          console.log(results);
        console.log('Requisição executada!');
    });
  }
