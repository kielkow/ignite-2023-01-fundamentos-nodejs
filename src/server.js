import http from 'node:http';

const server = http.createServer((req, res) => {
    const { method, url, body, params } = req;

    console.log({ method, url, body, params });

    if (method === "GET" && url === "/users") {
        return res.end('list users');
    }

    if (method === "POST" && url === "/users") {
        return res.end('create user');
    }

    return res.end('server up!');
});


server.listen(3333);
