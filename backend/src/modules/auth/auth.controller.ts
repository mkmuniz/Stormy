import { HTTP_STATUS } from "../utils/types/index";
import * as RESPONSE from '../utils/types/index';
import authService from './auth.service';
import express from 'express';

/**
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
 export async function login(req: express.Request, res: express.Response) {
    let nome = req.body.username;
    let senha = req.body.password;
    const results = await authService.postOne(nome, senha);
    return res.status(RESPONSE.HTTP_STATUS.OK).send(results)
}