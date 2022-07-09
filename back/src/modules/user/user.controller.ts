import userService from "./user.service";
import express from 'express';
import * as RESPONSE from '../utils/types/index';

export async function getAll(req: express.Request, res: express.Response) {
    return await userService.getAll().then(data => res.json(data))

}

export async function getOne(req: express.Request, res: express.Response) {
    const { id } = req.params;
    return await userService.getOne(id).then(data => res.json(data));
}

export async function findOne(req: express.Request, res: express.Response) {
    const { username } = req.body;
    return await userService.getUser(username).then(data => res.json(data))
}

export async function findOneEmail(req: express.Request, res: express.Response) {
    const { email } = req.body;
    return await userService.getUserEmail(email).then(data => res.json(data))
}

export async function postOne(req: express.Request, res: express.Response) {
    const { body } = req;
    return await userService.postOne(body).then(data => res.json(data))
}

export async function deleteOne(req: express.Request, res: express.Response) {
    const { id } = req.params;
    const results = await userService.deleteOne(id);
    return res.status(RESPONSE.HTTP_STATUS.OK).send(results);
}

export async function patchOne(req: express.Request, res: express.Response) {
    const { id } = req.params;
    const { body } = req;
    const results = await userService.patchOne(id, body);
    return res.status(RESPONSE.HTTP_STATUS.OK).send(results);
}