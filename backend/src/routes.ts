import { Router } from 'express';
const route = Router();
const routerUser = require('./modules/user/user.routes');

route.get('/', function (req: any, res: any) {
    res.json({ status: 'ok' })
});
route.use('/user', routerUser);

export default route;