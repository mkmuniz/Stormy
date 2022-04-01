import routesIndex from './routes';
import express from 'express';
import bodyParser from 'body-parser';
const app = express();

app.use(bodyParser.json())
app.use('/', routesIndex);

export default app;