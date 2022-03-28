
class userControl {
    static getAll(req: any, res: any) {
        try {
            return console.log('Route user acessed!');
        } catch (err) {
            return err;
        }
    }
}

module.exports = userControl;