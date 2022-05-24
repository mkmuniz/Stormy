import * as authController from './auth.controller';
import { loginStrategy } from './strategies/auth.strategies';
const Router = require('express');
const router = Router();

router.post('/', loginStrategy, authController.login);

module.exports = router;