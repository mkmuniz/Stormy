import { dbQuery } from '../_database/index'

export default class userService {
    static async getAll() {
        try {
            return dbQuery('SELECT * FROM user;');
        } catch(err) {
            return console.log('Error');
        }
    }
    static async getOne(name: string) {
        try {
            return dbQuery(`SELECT * FROM user WHERE name = '${name}';`);
        } catch(err) {
            return console.log('Error');
        }
    }
    static async patchOne(name: string) {
        try {
            return dbQuery(`SELECT * FROM user WHERE name = '${name}';`);
        } catch(err) {
            return console.log('Error');
        }
    }
    static async deleteOne(name: string) {
        try {
            return dbQuery(`SELECT * FROM user WHERE name = '${name}';`);
        } catch(err) {
            return console.log('Error');
        }
    }
}