import { connection } from '../../_database/index'
import TokenService from '../jwt/jwt.service';
const passport = require('passport');
const LocalStrategy = require('passport-local');

const localStrategy = new LocalStrategy(
    async (userOptions: any, done: any) => {
        await connection.query(`SELECT * FROM user WHERE USERNAME = '${userOptions.username}';`, (err: Error, user: any) => {
            if (err) { 
                return done(err); 
            }
            if (!user) { 
                return done(null, false); 
            }
            if (!user.verifyPassword(userOptions.password)) { 
                return done(null, false); 
            }

            return done(null, {token_de_acesso: TokenService.gerarToken(user)});
        })
    })
passport.use(localStrategy)
export const loginStrategy = passport.authenticate('local', { session: false });
export { passport };
