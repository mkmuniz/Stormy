import * as authController from './auth.controller';
const Router = require('express');
const router = Router();

router.post('/', authController.login);

module.exports = router;