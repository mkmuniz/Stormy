import userService from "./user.service";
import express from 'express';
import * as RESPONSE from '../utils/types/index';

/**
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
*/
export async function getAll(req: express.Request, res: express.Response) {
    const results = await userService.getAll();
    return res.status(RESPONSE.HTTP_STATUS.OK).send(results);

}

/**
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
*/
export async function getOne(req: express.Request, res: express.Response) {
    const { id } = req.params;
    const results = await userService.getOne(id);
    return res.status(RESPONSE.HTTP_STATUS.OK).send(results);
}

/**
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
*/
export async function postOne(req: express.Request, res: express.Response) {
    const { body } = req;
    const results = await userService.postOne(body);
    return res.status(RESPONSE.HTTP_STATUS.CREATED).send(results);
}

/**
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
*/
export async function deleteOne(req: express.Request, res: express.Response) {
    const { id } = req.params;
    const results = await userService.deleteOne(id);
    return res.status(RESPONSE.HTTP_STATUS.OK).send(results);
}