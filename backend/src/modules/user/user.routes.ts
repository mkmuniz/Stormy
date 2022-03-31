import * as userController from './user.controller';
const Router = require('express');
const router = Router();

router
    .get('/', userController.getAll)
    .get('/:name', userController.getOne);

module.exports = router;