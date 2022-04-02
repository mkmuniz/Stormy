import * as userController from './user.controller';
const Router = require('express');
const router = Router();

router
    .get('/', userController.getAll)
    .get('/:id', userController.getOne)
    .post('/', userController.postOne)
    .patch('/:id', userController.patchOne)
    .delete('/:id', userController.deleteOne)
module.exports = router;