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

/**
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
*/
export async function getOne(req: any, res: any) {
    const { id } = req.params;
    try {
        return await userService.getOne(id)
            .then(data => res.json(data))
            .catch(data => res.json(data))   
    } catch(err) {
        return err;
    }
}

/**
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
*/
export async function postOne(req: any, res: any) {
    const { body } = req;
    return await userService.postOne(body)
        .then(data => res.json(data))
        .catch(data => res.json(data))
}

/**
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
*/
export async function patchOne(req: any, res: any) {
    const id = req.params.id;
    return await userService.getOne(id)
        .then(data => res.json(data))
        .catch(data => res.json(data))
}

export async function deleteOne(req: any, res: any) {
    const userName = req.params.name;
    return await userService.getOne(userName)
        .then(data => res.json(data))
        .catch(data => res.json(data))
}