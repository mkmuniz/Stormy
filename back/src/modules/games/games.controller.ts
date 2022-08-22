import gamesService from "./games.service";
import express from 'express';

export async function getAll(req: express.Request, res: express.Response) {
    const results = await gamesService.getAll().then(data => res.json(data));

    return res.status(200).send(results);

}

export async function getOne(req: express.Request, res: express.Response) {
    const { id } = req.params;
    const results = await gamesService.getOne(id).then(data => res.json(data));

    return res.status(200).send(results);
}

export async function postOne(req: express.Request, res: express.Response) {
    const { body } = req;
    const results = await gamesService.postOne(body).then((data: any) => res.json(data));

    return res.status(200).send(results); 
}

export async function postComentario(req: express.Request, res: express.Response) {
    const { body } = req;
    const { id } = req.params;
    const results = await gamesService.postComentario(id, body).then((data: any) => res.json(data));

    return res.status(200).send(results);
}

export async function postResposta(req: express.Request, res: express.Response) {
    const { body } = req;
    const { id } = req.params;
    const results = await gamesService.postResposta(id, body).then((data: any) => res.json(data));

    return res.status(200).send(results);
}

export async function deleteOne(req: express.Request, res: express.Response) {
    const { id } = req.params;
    const results = await gamesService.deleteOne(id);

    return res.status(200).send(results);
}

export async function patchOne(req: express.Request, res: express.Response) {
    const { id } = req.params;
    const { body } = req;
    const results = await gamesService.patchOne(id, body);

    return res.status(200).send(results);
}