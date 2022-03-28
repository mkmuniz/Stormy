const mysql = require('mysql2');
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors);

export const connection = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    connectionLimit: process.env.LIMIT
})