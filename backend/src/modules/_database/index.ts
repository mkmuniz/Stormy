import { execFileSync } from "child_process";

const mysql = require('mysql2/promise');
const cors = require('cors');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

export const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '12345',
  database: 'stormydb',
  connectionLimit: '50'
})