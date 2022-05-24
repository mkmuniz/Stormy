import jwt from 'jsonwebtoken';
import * as ERROR_STATUS from '../../utils/types/index';

export default class TokenService {
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
}