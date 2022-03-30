import { dbQuery } from '../_database/index'

export default class userService {
    static async getAll() {
        try {
            return dbQuery('SELECT * FROM user;');
        } catch(err) {
            return console.log('Error');
        }
    }
}