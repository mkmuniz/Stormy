import routesIndex from './routes';
import express from 'express';
const app = express();


app.use('/', routesIndex);

export default app;