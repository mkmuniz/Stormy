import mongoose from 'mongoose';
import 'dotenv/config';
const cors = require('cors');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const URL: any = process.env.UR;
mongoose.connect(URL)
    .catch(err => {
        return console.error('Error, database does not connected!', { err })
    });

export default mongoose;