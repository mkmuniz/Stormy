import { connection } from '../_database/index'
import { randomUUID } from 'crypto';
const bcrypt = require('bcrypt');


export default class userService {
    static async getAll() {
        const results = await connection.query('SELECT * FROM user;');
        try {
            return results;
        } catch(err) {
            return console.log('Error');
        }
    }
    /* static async getOne(id: string) {
        try {
            return dbQuery(`SELECT * FROM user WHERE ID = '${id}';`);
        } catch(err) {
            return console.log('Error');
        }
    }


    static async postOne(body: any) {
        const id = randomUUID();
        const salt = await bcrypt.genSalt(10);
        const password = await bcrypt.hash(body.password, salt);
        try {
            return dbQuery(`INSERT INTO user (ID, username, email, password) VALUES ('${id}', '${body.username}', '${body.email}', '${password}');`);
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
    }*/
}