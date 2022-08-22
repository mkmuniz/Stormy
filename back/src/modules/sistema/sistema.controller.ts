import sistemaService from "./sistema.service";
import express from 'express';

export async function getAll(req: express.Request, res: express.Response) {
    const result = await sistemaService.getAll()
    .then(data => res.json(data));

    return result;

}

export async function getOne(req: express.Request, res: express.Response) {
    const { id } = req.params;
    const result = await sistemaService.getOne(id)
    .then(data => res.json(data));

    return result; 
}

export async function createOne(req: express.Request, res: express.Response) {
    const { body } = req;
    const result = await sistemaService.create(body)
    .then(data => res.json(data))
     
    return result;
}