import http from 'node:http';

const server = http.createServer((req, res) => {
    console.log(req);

    return res.end('server up!')
});


server.listen(3333);
