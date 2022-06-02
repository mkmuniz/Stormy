import { Router } from 'express';
const route = Router();
const routerUser = require('./modules/user/user.routes');
const routerLogin = require('./modules/auth/auth.routes');
const cors = require('cors');
const express= require('express');
const app = express();

app.use(
    cors({
        origin: "http://localhost:3000"
    }));
route.get('/', function (req: any, res: any) {
    res.json({ status: 'ok' })
});
route.use('/user', routerUser);
route.use('/login', routerLogin)

export default route;