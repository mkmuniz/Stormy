import { HTTP_STATUS } from "../utils/types/index";
import * as RESPONSE from '../utils/types/index';
import authService from './auth.service';
import express from 'express';
import passport from "passport";

/**
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
 export async function authenticate(req: express.Request, res: express.Response) {
    let nome = req.body.username;
    let senha = req.body.password;
    
}