const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;
const routerUser = require('./modules/user/user.routes');

app.use(cors);
app.listen(port, () => {
    app.use('/user', routerUser);
    app.get('/', function (req: any, res: { json: (arg0: { status: string; }) => void; }) {
        res.json({ status: 'ok' })
    });
    console.log(`Server is running at`, port)
})