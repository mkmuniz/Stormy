import userService from "./user.service";
import express from 'express';

export async function getAll(req: express.Request, res: express.Response) {
    const results = await userService.getAll().then(data => res.json(data));

    return res.status(200).send(results);

}

export async function getOne(req: express.Request, res: express.Response) {
    const { id } = req.params;
    const results = await userService.getOne(id).then(data => res.json(data));

    return results;
}

export async function findOne(req: express.Request, res: express.Response) {
    const { username } = req.body;
    const results = await userService.getUser(username).then(data => res.json(data));

    return res.status(200).send(results); 
}

export async function findOneEmail(req: express.Request, res: express.Response) {
    const { email } = req.body;
    const results = await userService.getUserEmail(email).then(data => res.json(data));
    return res.status(200).send(results);
}

export async function postOne(req: express.Request, res: express.Response) {
    const { body } = req;
    const results = await userService.postOne(body).then(data => res.json(data));

    return res.status(200).send(results);
}

export async function deleteOne(req: express.Request, res: express.Response) {
    const { id } = req.params;
    const results = await userService.deleteOne(id);

    return res.status(200).send(results);
}

export async function patchOne(req: express.Request, res: express.Response) {
    const { id } = req.params;
    const { body } = req;
    const results = await userService.patchOne(id, body);

    return res.status(200).send(results);
}