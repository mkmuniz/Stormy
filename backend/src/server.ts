const datab = require('./modules/_database/index.ts')
const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;
const routerUser = require('./modules/user/user.routes');

app.use(cors);
app.use('/user', routerUser);
datab.start(process.env.HOST, process.env.USER, process.env.PASSWORD, process.env.DATABASE, process.env.LIMIT);
app.listen(port, () => {
    console.log(`Server is running at`, port)
})
