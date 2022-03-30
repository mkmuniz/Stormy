import { execFileSync } from "child_process";

const mysql = require('mysql2');
const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors());
export function dbQuery(sqlQry: string) {
  try {
    const connection = mysql.createPool({
      host: 'localhost',
      user: 'root',
      password: 'MIKAel@512834',
      database: 'stormydb',
      connectionLimit: '50'
    })
    connection.query(sqlQry, function (error: any, results: any, fields: any) {
      if(!error)
      return(results)
      else
      console.log(error);
    });
  } catch (err) {
    return console.log(err);
  }
}
