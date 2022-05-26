import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import * as ERROR_STATUS from '../../utils/types/index';

const { genSaltSync, hashSync, compareSync } = bcrypt;

export default class TokenService {
    static gerarHash(password: string) {
        let salt = genSaltSync(10);
        password = hashSync(password, salt);
        return (password);
    }

    static gerarToken(user: Object) {
        let token;

        try {
            if (user === null) {
                throw ERROR_STATUS.TOKEN_ERROR.NOT_FOUND;
            }

            token = jwt.sign(user, 'teste', { 'expiresIn': '1d' })

            return token;

        } catch (err: any) {
            return err;
        }
    }

    static compararSenhas(password: string, passwordHashared: string) {

        try {

            return compareSync(password, passwordHashared);;

        } catch (err: any) {
            return err;
        }
    }
}