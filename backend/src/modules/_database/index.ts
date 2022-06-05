import mongoose from 'mongoose';

const cors = require('cors');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const URL = "mongodb+srv://stormy:345123@cluster0.2cdtahj.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(URL)
    .catch(err => {
        throw err
    });

export default mongoose;