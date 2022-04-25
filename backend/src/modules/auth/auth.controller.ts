import { HTTP_STATUS } from "modules/utils/types";
import express from 'express';

/**
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
 export async function login(req: express.Request, res: express.Response) {
    res.status(HTTP_STATUS.OK).json(req);
}