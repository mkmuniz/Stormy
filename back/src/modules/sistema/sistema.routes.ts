import * as sistemaController from './sistema.controller';


import { Router } from 'express';
const router = Router();

router
    .get('/', sistemaController.getAll)
    .get('/:id', sistemaController.getOne)
    .post('/', sistemaController.createOne)

module.exports = router;