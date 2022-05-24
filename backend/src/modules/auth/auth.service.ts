import { connection } from '../_database/index'
import { randomUUID } from 'crypto';
const bcrypt = require('bcrypt');


export default class authService {

    static async postOne(name: string, password: string) {
        const results = await connection.query(`SELECT * FROM user WHERE USERNAME = '${name}';`)
        try {
            if(results === []) {
                return (404);
            }

            await bcrypt.compare(password, results.password, (result: Boolean) => {
                if(result === true) {
                    return (500);
                } else {
                    return (404);
                }
            });
        } catch(err: any) {
            return console.log(err as Error);
        }
    }

}