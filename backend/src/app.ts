import routesIndex from './routes';
import express from 'express';
import bodyParser from 'body-parser';
const cors = require('cors');
const app = express();

app.use(bodyParser.json())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use('/', routesIndex);

export default app;