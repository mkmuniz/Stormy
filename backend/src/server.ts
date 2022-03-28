import app from './app';
import http from 'http';


let port = '3001';

let server = http.createServer(app);

server.listen(port);

server.on('listening', () => {
    return console.log('Port listening at port 3001');
})
