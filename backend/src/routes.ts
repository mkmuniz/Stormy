import { Router } from 'express';
const route = Router();
const routerUser = require('./modules/user/user.routes');
const routerLogin = require('./modules/auth/auth.routes');

route.get('/', function (req: any, res: any) {
    res.json({ status: 'ok' })
});
route.use('/user', routerUser);
route.use('/login', routerLogin)

export default route;