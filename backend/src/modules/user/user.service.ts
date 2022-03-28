import { connection } from '../_database/index'

export default class userService {
    static getAll() {
        return connection.query("CREATE TABLE pet (name VARCHAR(20), owner VARCHAR(20), species VARCHAR(20), sex CHAR(1), birth DATE, death DATE)")
    }
}