import userService from "./user.service";

export async function getAll(req: any, res: any) {
    try {
        return await userService.getAll();
    } catch (err) {
        return err;
    }
}