import * as userController from './user.controller';
const Router = require('express');
const router = Router();

router
    .get('/', userController.getAll);

module.exports = router;