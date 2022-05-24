import { connection } from '../../_database/index'
const passport = require('passport');
const LocalStrategy = require('passport-local');

passport.use(new LocalStrategy(
    async function (username: String, password: String, done: any) {
        await connection.query(`SELECT * FROM user WHERE USERNAME = '${username}';`, (err: Error, user: any) => {
            if (err) { return done(err); }
            if (!user) { return done(null, false); }
            if (!user.verifyPassword(password)) { return done(null, false); }
            return done(null, user);
        })
    }))

module.exports = passport;
