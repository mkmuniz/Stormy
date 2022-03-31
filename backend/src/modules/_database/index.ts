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
      password: '12345',
      database: 'stormydb',
      connectionLimit: '50'
    })
    connection.query(sqlQry, function (error: any, results: any, fields: any) {
      if(!error)
      console.log(results)
      else
      console.log(error);
    });
  } catch (err) {
    return console.log(err);
  }
}
