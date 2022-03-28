import userService from "./user.service";

/**
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
*/
export async function getAll(req: any, res: any) {
    return await userService.getAll()
        .then(data => res.json(data))
        .catch(data => res.json(data))
}