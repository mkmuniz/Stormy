import { execFileSync } from "child_process";

const mysql = require('mysql2');
const cors = require('cors');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
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
      return fields;
      else
      console.log(error);
    });
  } catch (err) {
    return console.log(err);
  }
}
