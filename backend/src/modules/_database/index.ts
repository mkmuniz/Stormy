const mysql = require('mysql2');
const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors());
export function dbQuery(sqlQry: string) {
  try {
    const connection = mysql.createPool({
      host: 'localhost',
      user: 'root@localhost',
      password: 'MIKAel@512834',
      database: 'stormydb',
      connectionLimit: '50'
    })
    connection.query(sqlQry, function (error: any, results: any, fields: any) {
      console.log('Requisição executada!');
    });
  } catch (err) {
    return console.log(err);
  }
}
