import express from 'express';

/**
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
 export async function login(req: express.Request, res: express.Response) {
    return res.status(200).send(req.user);
}