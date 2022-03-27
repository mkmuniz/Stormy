import userService from "./user.service";

export async function getAll(req, res) {
    try {
        return userService.getAll()
    } catch (err) {
        return err;
    }
}